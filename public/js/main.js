$(document).ready(function (e) {
    $(this).scrollTop(0);

    var url = $("#application_url").val();

    // PUBLICATION ADD SECTION ////////////////////////////////////////

    var row =
        "<tr style='display: none;'>" +
        "<td>0</td>" +
        "<td></td>" +
        "<td>" +
        "<a class='pubaddadd' title='Add' data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></a>" +
        "<a class='pubaddedit' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>" +
        "<a class='pubadddelete' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>" +
        "</td>" +
        "</tr>";

    $(".pubaddtable").append(row);

    $('[data-toggle="tooltip"]').tooltip();

    var actions = $(".pubaddtable td:last-child").html();
    var validationVoilated = false;
    var category = "";
    var pub_dup_title = false;
    var pub_dup_conference = false;
    var addnew = false;

    $("#pubaddtextareatitle").keyup(function () {
        pub_dup_title = "";

        //DUPLICATE TITLE CHECK
        if ($(this).val() != "") {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "POST",
                dataType: "text",
                url: url + "/gettitle",
                data: { duptitle: $("#pubaddtextareatitle").val() },
                success: function () {},
                complete: function () {
                    $.ajax({
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                        },
                        type: "GET",
                        url: url + "/check_title_duplication",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        success: function (data) {
                            if (data.length > 0) {
                                pub_dup_title = true;
                            } else {
                                pub_dup_title = false;
                            }
                        },
                    });
                },

                error: function (xhr, errorType) {
                    var responseTitle = $(xhr.responseText)
                        .filter("title")
                        .get(0);

                    swal(
                        "Error!",
                        $(responseTitle).text() + "\n" + xhr + "\n" + errorType
                    );
                },
            });
        }
    });

    $("#pubaddtextareanameofconference").keyup(function () {
        pub_dup_conference = "";

        //DUPLICATE CONFERENCE CHECK
        if ($(this).val() != "") {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "POST",
                dataType: "text",
                url: url + "/getconference",
                data: {
                    duptitle: $("#pubaddtextareanameofconference").val(),
                },
                success: function () {},
                complete: function () {
                    $.ajax({
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                                "content"
                            ),
                        },
                        type: "GET",
                        url: url + "/check_conference_duplication",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        success: function (data) {
                            if (data.length > 0) {
                                pub_dup_conference = true;
                            } else {
                                pub_dup_conference = false;
                            }
                        },
                    });
                },

                error: function (xhr, errorType) {
                    var responseTitle = $(xhr.responseText)
                        .filter("title")
                        .get(0);

                    swal(
                        "Error!",
                        $(responseTitle).text() + "\n" + xhr + "\n" + errorType
                    );
                },
            });
        }
    });

    // pubadd = All form element click event
    $(".pubaddbtnnext").click(function (e) {
        e.preventDefault();

        validationVoilated = false;

        // INPUT VALIDATION
        $(".pubaddform")
            .find("input")
            .each(function () {
                if (
                    this.id !== "pubaddinputvolumeno" &&
                    this.id !== "pubaddinputissueno" &&
                    this.id !== "pubaddinputpageno" &&
                    this.id !== "pubaddinputdoi"
                ) {
                    if (!$(this).val()) {
                        if (category.includes("conference")) {
                            if (this.id !== "pubaddinputimpactfactor") {
                                var replacedid = this.id.replace(
                                    "input",
                                    "label"
                                );
                                $("#" + replacedid).css({ color: "#ea1f25" });
                            }
                        } else {
                            var replacedid = this.id.replace("input", "label");
                            $("#" + replacedid).css({ color: "#ea1f25" });
                        }
                    }
                }
            });

        //TEXTAREA VALIDATION
        $(".pubaddform")
            .find("textarea")
            .each(function () {
                if (!$(this).val()) {
                    var replacedid = this.id.replace("textarea", "label");
                    $("#" + replacedid).css({ color: "#ea1f25" });
                }
            });

        //SELECT VALIDATION
        $(".pubaddform")
            .find("select")
            .each(function () {
                if (
                    $("#" + this.id)
                        .find(":selected")
                        .text() === ""
                ) {
                    if (category.includes("journal")) {
                        if (this.id !== "pubaddselectarticle") {
                            var replacedid = this.id.replace("select", "label");
                            $("#" + replacedid).css({ color: "#ea1f25" });
                        }
                    } else {
                        var replacedid = this.id.replace("select", "label");
                        $("#" + replacedid).css({ color: "#ea1f25" });
                    }
                }
            });

        //CHECKBOX VALIDATION
        var checked = false;
        $(".pubaddform")
            .find('input[type="checkbox"]')
            .each(function () {
                if ($(this).is(":checked") == false) {
                    checked = false;
                } else {
                    checked = true;
                    return false;
                }
            });

        if (checked) {
            $(".pubaddform")
                .find('input[type="checkbox"]')
                .each(function () {
                    var replacedid = this.id.replace("check", "label");
                    $("#" + replacedid).css({ color: "#2e2e2e" });
                });
        } else {
            $(".pubaddform")
                .find('input[type="checkbox"]')
                .each(function () {
                    var replacedid = this.id.replace("check", "label");
                    $("#" + replacedid).css({ color: "#ea1f25" });
                });
        }

        //LABEL COLOR CHANGING PROCESS
        $(".pubaddform")
            .find("label")
            .each(function () {
                if ($("#" + this.id).css("color") === "rgb(234, 31, 37)") {
                    validationVoilated = true;
                    return false;
                }
            });

        if (!validationVoilated) {
            var validateduplicate = false;

            if (pub_dup_title && pub_dup_conference) {
                validateduplicate = true;
                swal("Please Check!", "Title and Conference already exist.");
            } else if (pub_dup_title && !pub_dup_conference) {
                validateduplicate = true;
                swal("Please Check!", "Title  already exist.");
            } else if (!pub_dup_title && pub_dup_conference) {
                validateduplicate = true;
                swal("Please Check!", "Conference  already exist.");
            }

            if (!validateduplicate) {
                $(".card.first").removeClass("sectionactive");
                $(".card.first").addClass("sectiondeactive");

                $(".card.second").css({
                    opacity: "1",
                    "pointer-events": "auto",
                });

                $("#pubaddtitledisplay").append(
                    $.trim($("#pubaddtextareatitle").val())
                );
            }
        }
    });

    //pubadd = Back button click event
    $(".pubaddbtnback").click(function () {
        $(".card.first").removeClass("sectiondeactive");
        $(".card.first").addClass("sectionactive");
        $(".card.second").css({ opacity: "0", "pointer-events": "none" });
    });

    //pubadd = pubaddinputdate > (date) change
    $("#pubaddinputdate").change(function () {
        var replacedid = this.id.replace("input", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddselectarticle > (select) change
    $("#pubaddselectarticle").change(function () {
        var replacedid = this.id.replace("select", "label");

        if (category.includes("conference")) {
            if ($(this).val()) {
                $("#" + replacedid).css({ color: "#2e2e2e" });
            } else {
                $("#" + replacedid).css({ color: "#ea1f25" });
            }
        }
    });

    //pubadd = pubaddselectauthortype > (select) change
    $("#pubaddselectauthortype").change(function () {
        var replacedid = this.id.replace("select", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddselectcategory > (select) change
    $("#pubaddselectcategory").change(function () {
        // 1 - Conference
        // 2 - Journal

        category = $("#pubaddselectcategory option:selected")
            .text()
            .toLowerCase();

        if (category.length > 0) {
            $("#pubaddlabelcategory").css({ color: "#2e2e2e" });
        }

        if (category.includes("conference")) {
            $("#pubaddinputimpactfactor").prop("disabled", "disabled");
            $("#pubaddinputimpactfactor").val("");
            $("#pubaddselectarticle").removeAttr("disabled");

            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "GET",
                url: url + "/showarticle",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    $("#pubaddselectarticle").empty();
                    $("#pubaddselectarticle").append(
                        '<option value="0" selected></option>'
                    );
                    $.each(data, function (key, value) {
                        $("#pubaddselectarticle").append(
                            '<option value="' +
                                value.articleid +
                                '">' +
                                value.article +
                                "</option>"
                        );
                    });
                },
                error: function (xhr, errorType) {
                    var responseTitle = $(xhr.responseText)
                        .filter("title")
                        .get(0);

                    swal(
                        "Error!",
                        $(responseTitle).text() + "\n" + xhr + "\n" + errorType
                    );
                },
            });
            $("#pubaddlabelimpactfactor").css({ color: "#2e2e2e" });
        } else {
            $("#pubaddinputimpactfactor").removeAttr("disabled");
            $("#pubaddselectarticle").prop("disabled", "disabled");
            $("#pubaddselectarticle").empty();
            $("#pubaddselectarticle").append(
                '<option value="0" selected></option>'
            );

            $("#pubaddlabelarticle").css({ color: "#2e2e2e" });
        }
    });

    //pubadd = pubaddselectdemography > (select) change
    $("#pubaddselectdemography").change(function () {
        var replacedid = this.id.replace("select", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddselectconference > (select) change
    $("#pubaddselectconference").change(function () {
        var replacedid = this.id.replace("select", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddselectranking > (select) change
    $("#pubaddselectranking").change(function () {
        var replacedid = this.id.replace("select", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddselectbroadarea > (select) change
    $("#pubaddselectbroadarea").change(function () {
        var replacedid = this.id.replace("select", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddtextareatitle > (textarea) change
    $("#pubaddtextareatitle").change(function () {
        var replacedid = this.id.replace("textarea", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddtextareanameofconference > (textarea) change
    $("#pubaddtextareanameofconference").change(function () {
        var replacedid = this.id.replace("textarea", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddinputimpactfactor > (text) change
    $("#pubaddinputimpactfactor").change(function () {
        var replacedid = this.id.replace("input", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddinputlocation > (text) change
    $("#pubaddinputlocation").change(function () {
        var replacedid = this.id.replace("input", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddinputpublisher > (text) change
    $("#pubaddinputpublisher").change(function () {
        var replacedid = this.id.replace("input", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = all checkboxes > (check) change
    $('input[type="checkbox"]').change(function () {
        $(".pubaddform")
            .find('input[type="checkbox"]')
            .each(function () {
                if (!$(this).checked) {
                    var replacedid = this.id.replace("check", "label");
                    $("#" + replacedid).css({ color: "#2e2e2e" });
                }
            });
    });

    // Append table with add row form on add new button click
    $(".pubaddnew").click(function (e) {
        e.preventDefault();

        $(this).attr("disabled", "disabled");
        var index = $(".pubaddtable tbody tr:last-child").index();
        var row =
            "<tr>" +
            "<td name='slno'>" +
            (parseInt($("table.pubaddtable tr:last td:first").text()) + 1) +
            "</td>" +
            '<td name="name"><input type="text" class="form-control"  id="name"></td>' +
            "<td>" +
            actions +
            "</td>" +
            "</tr>";

        $(".pubaddtable").append(row);

        $("table.pubaddtable tbody tr")
            .eq(index + 1)
            .find(".pubaddadd, .pubaddedit")
            .toggle();
        $('[data-toggle="tooltip"]').tooltip();

        addnew = true;
    });

    // Add row on add button click
    $(document).on("click", ".pubaddadd", function (e) {
        e.preventDefault();

        var empty = false;
        var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function () {
            if (!$(this).val()) {
                $(this).addClass("error");
                empty = true;
            } else {
                $(this).removeClass("error");
            }
        });
        $(this).parents("tr").find(".error").first().focus();
        if (!empty) {
            input.each(function () {
                $(this).parent("td").html($(this).val());

                // console.log("test content :: ", $("table tbody").html());
            });
            $(this).parents("tr").find(".pubaddadd, .pubaddedit").toggle();
            $(".pubaddnew").removeAttr("disabled");

            addnew = false;
        }
    });

    // Edit row on edit button click
    $(document).on("click", ".pubaddedit", function (e) {
        e.preventDefault();

        $(this)
            .parents("tr")
            .find("td:not(:last-child)")
            .each(function () {
                $(this).html(
                    '<input type="text" class="form-control" value="' +
                        $(this).text() +
                        '">'
                );
            });
        $(this).parents("tr").find(".pubaddadd, .pubaddedit").toggle();
        $(".pubaddnew").attr("disabled", "disabled");

        addnew = true;
    });

    //  pubadd => Delete row on delete button click
    $(document).on("click", ".pubadddelete", function (e) {
        e.preventDefault();

        $(this).parents("tr").remove();

        $("table tbody")
            .find("tr")
            .each(function (index) {
                $($(this).find("td")[0]).text(index);
            });

        $(".pubaddnew").removeAttr("disabled");
        $(this).tooltip("hide");
    });

    // pubadd => check box functionality
    $(".pubaddformcheck .form-check-input").click(function () {
        $(".pubaddformcheck .form-check-input")
            .not(this)
            .prop("checked", false);

        $("#pubaddlabeldate").text($(this).val() + " Date");
    });

    function pubaddrefresh() {
        $(":input", ".pubaddform")
            .not(":button, :submit, :reset, :hidden")
            .val("")
            .prop("checked", false)
            .prop("selected", false)
            .prop("disabled", false);

        $("#pubaddtitledisplay").val("");
        $("table.pubaddtable tbody tr").not(":first").remove();

        $(".pubaddform")
            .find("label")
            .each(function () {
                $("#" + this.id).css({ color: "#2e2e2e" });
            });
    }

    // pubadd => Refresh button click
    $(".pubaddrefresh").click(function () {
        pubaddrefresh();
    });

    //ALLOW NUMERIC AND DECIMAL
    $(".allow_numeric").on("input", function (evt) {
        // var self = $(this);
        $(this).val(
            $(this)
                .val()
                .replace(/[^0-9\.]/g, "")
        );
        if (evt.which < 48 || evt.which > 57) {
            evt.preventDefault();
        }
    });

    // SAVE RECORDS IN DATABASE
    $(".pubaddbtnsubmit").click(function (e) {
        e.preventDefault();

        if ($("table.pubaddtable tbody tr").length - 1 === 0 || addnew) {
            swal("", "Please enter Author details!", "info");
        } else {
            var tableArr = [];

            $("table.pubaddtable tbody tr")
                .not(":first")
                .each(function () {
                    tableArr.push({
                        slno: $(this).children("td").eq(0).text(),
                        name: $(this).children("td").eq(1).text(),
                    });
                });

            var formdata = $(".pubaddform").serializeArray();
            var data = {};
            $(formdata).each(function (index, obj) {
                data[obj.name] = obj.value;
            });

            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "POST",
                dataType: "text",
                url: url + "/writetodb",
                data: {
                    departmentid: parseInt(
                        $("#departmentid")
                            .val()
                            .substring(0, $("#departmentid").val().length - 1)
                    ),
                    categoryid: $("#pubaddselectcategory")
                        .find(":selected")
                        .val(),
                    authortypeid: $("#pubaddselectauthortype")
                        .find(":selected")
                        .val(),
                    article: $("#pubaddselectarticle").find(":selected").val(),
                    nationality: $("#pubaddselectdemography")
                        .find(":selected")
                        .val(),
                    pubdate: $("#pubaddinputdate").val(),
                    submitted: $("#pubaddchecksubmitted").is(":checked"),
                    accepted: $("#pubaddcheckaccepted").is(":checked"),
                    published: $("#pubaddcheckpublished").is(":checked"),
                    title: $("#pubaddtextareatitle").val(),
                    confname: $("#pubaddtextareanameofconference").val(),
                    place: $("#pubaddinputlocation").val(),
                    rankingid: $("#pubaddselectranking")
                        .find(":selected")
                        .val(),
                    broadareaid: $("#pubaddselectbroadarea")
                        .find(":selected")
                        .val(),
                    impactfactor: $("#pubaddinputimpactfactor").val(),
                    volume: $("#pubaddinputvolumeno").val(),
                    issue: $("#pubaddinputissueno").val(),
                    pp: $("#pubaddinputpageno").val(),
                    digitallibrary: $("#pubaddinputdoi").val(),
                    publisher: $("#pubaddinputpublisher").val(),
                    tabledata: tableArr,
                },
                success: function () {
                    pubaddrefresh();
                    swal("", "Record saved successfully!", "success");
                    $(".card.first").removeClass("sectiondeactive");
                    $(".card.first").addClass("sectionactive");
                    $(".card.second").css({
                        opacity: "0",
                        "pointer-events": "none",
                    });
                },

                error: function (xhr, errorType) {
                    var responseTitle = $(xhr.responseText)
                        .filter("title")
                        .get(0);

                    swal("Error!", $(responseTitle).text() + "\n" + xhr);
                },
            });
        }
    });

    // PUBLICATION EDITVIEW SECTION ////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    function pubeditviewrefresh() {
        $(".pubeditviewcard")
            .find("input")
            .each(function () {
                if (this.id != "pubeditviewdate") {
                    $("#" + this.id).val();
                } else {
                    $("#" + this.id).val(new Date().getFullYear());
                }
            });

        $(".pubeditviewcard")
            .find("select")
            .each(function () {
                $("#" + this.id).prop("selectedIndex", 0);
            });

        $(".pubeditviewcard")
            .find("label")
            .each(function () {
                $("#" + this.id).css({ color: "#2e2e2e" });
            });
    }

    $("#pubeditviewdate").datepicker({
        minViewMode: 2,
        autoclose: true,
        todayHighlight: true,
        format: "yyyy",
    });

    pubeditviewrefresh();

    $(".pubeditviewrefresh").click(function () {
        pubeditviewrefresh();
    });

    // AUTHOR SEARCH KEYUP IN INPUT TYPE TEXT
    $("#pubeditviewinputauthorsearch").keyup(function () {
        var query = $(this).val();

        if (query != "") {
            var page = $("hidden_page").val();

            fetch_author_data(query);
        } else {
            $("#auth-edit-data tr").remove();
            $("#auth-edit-data tbody").append(
                "<tr><td></td><td></td><td></td><td></td></tr>"
            );
        }
    });
});
