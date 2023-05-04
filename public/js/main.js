$(document).ready(function (e) {
    $(this).scrollTop(0);

    var url = $("#application_url").val();

    // PUBLICATION ADD SECTION ////////////////////////////////////////

    var actions = "";
    var row = "";
    if ($(".container").attr("id").includes("add")) {
        row =
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

        actions = $(".pubaddtable td:last-child").html();
        ////
    } else if ($(".container").attr("id").includes("update")) {
        actions = $(".pubupdatetable td:last-child").html();
    }

    $('[data-toggle="tooltip"]').tooltip();

    var validationVoilated = false;
    var category = "";
    var pub_dup_title = false;
    var pub_dup_conference = false;
    var addnew = false;

    $("#pubaddtextareatitle").keyup(function () {
        titleduplicate("pubadd");
    });

    $("#pubaddtextareanameofconference").keyup(function () {
        conferenceduplicate("pubadd");
    });

    // pubadd = next button click event
    $(".pubaddbtnnext").click(function (e) {
        e.preventDefault();

        nextbutton("pubadd");
    });

    //pubadd = Back button click event
    $(".pubaddbtnback").click(function () {
        backbutton("pubadd");
    });

    //pubadd, pubupdate = pubaddinputdate > (date) change
    $("#pubaddinputdate, #pubupdateinputdate").change(function () {
        var replacedid = this.id.replace("input", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd, pubupdate = pubaddselectarticle > (select) change
    $("#pubaddselectarticle, #pubaddselectarticle").change(function () {
        var replacedid = this.id.replace("select", "label");

        if (category.includes("conference")) {
            if ($(this).val()) {
                $("#" + replacedid).css({ color: "#2e2e2e" });
            } else {
                $("#" + replacedid).css({ color: "#ea1f25" });
            }
        }
    });

    //pubadd, pubupdate = pubaddselectauthortype > (select) change
    $("#pubaddselectauthortype, #pubaddselectauthortype").change(function () {
        var replacedid = this.id.replace("select", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = pubaddselectcategory > (select) change
    $("#pubaddselectcategory").change(function () {
        categorychange("pubadd");
    });

    //pubadd, pubupdate = pubaddselectdemography > (select) change
    $("#pubaddselectdemography, #pubupdateselectdemography").change(
        function () {
            var replacedid = this.id.replace("select", "label");
            if ($(this).val()) {
                $("#" + replacedid).css({ color: "#2e2e2e" });
            } else {
                $("#" + replacedid).css({ color: "#ea1f25" });
            }
        }
    );

    //pubadd, pubupdate = pubaddselectconference > (select) change
    $("#pubaddselectconference, #pubupdateselectconference").change(
        function () {
            var replacedid = this.id.replace("select", "label");
            if ($(this).val()) {
                $("#" + replacedid).css({ color: "#2e2e2e" });
            } else {
                $("#" + replacedid).css({ color: "#ea1f25" });
            }
        }
    );

    //pubadd, pubupdate = pubaddselectranking > (select) change
    $("#pubaddselectranking, #pubupdateselectranking").change(function () {
        var replacedid = this.id.replace("select", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd, pubupdate = pubaddselectbroadarea > (select) change
    $("#pubaddselectbroadarea, #pubupdateselectbroadarea").change(function () {
        var replacedid = this.id.replace("select", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd, pubupdate = pubaddtextareatitle > (textarea) change
    $("#pubaddtextareatitle, #pubupdatetextareatitle").change(function () {
        var replacedid = this.id.replace("textarea", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd, pubupdate = pubaddtextareanameofconference > (textarea) change
    $(
        "#pubaddtextareanameofconference, #pubupdatetextareanameofconference"
    ).change(function () {
        var replacedid = this.id.replace("textarea", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd, pubupdate = pubaddinputimpactfactor > (text) change
    $("#pubaddinputimpactfactor, #pubupdateinputimpactfactor").change(
        function () {
            var replacedid = this.id.replace("input", "label");
            if ($(this).val()) {
                $("#" + replacedid).css({ color: "#2e2e2e" });
            } else {
                $("#" + replacedid).css({ color: "#ea1f25" });
            }
        }
    );

    //pubadd, pubupdate = pubaddinputlocation > (text) change
    $("#pubaddinputlocation, #pubupdateinputlocation").change(function () {
        var replacedid = this.id.replace("input", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd, pubupdate = pubaddinputpublisher > (text) change
    $("#pubaddinputpublisher, #pubupdateinputpublisher").change(function () {
        var replacedid = this.id.replace("input", "label");
        if ($(this).val()) {
            $("#" + replacedid).css({ color: "#2e2e2e" });
        } else {
            $("#" + replacedid).css({ color: "#ea1f25" });
        }
    });

    //pubadd = all checkboxes > (check) change
    $('input[type="checkbox"]').change(function () {
        if ($(this).attr("id").includes("add")) {
            checkforallcheckboxes("pubadd");
        } else if ($(this).attr("id").includes("update")) {
            checkforallcheckboxes("pubupdate");
        }
    });

    //pubadd = Append table with add row form on add new button click
    $(".pubaddnew").click(function (e) {
        e.preventDefault();

        addnewentry("pubadd");
    });

    //pubadd, pubupdate = Add row on add button click
    $(document).on("click", ".pubaddadd, .pubupdateadd", function (e) {
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
            });

            if ($(this).attr("class").includes("addadd")) {
                $(this).parents("tr").find(".pubaddadd, .pubaddedit").toggle();
                $(".pubaddnew").removeAttr("disabled");
            }
            if ($(this).attr("class").includes("updateadd")) {
                $(this)
                    .parents("tr")
                    .find(".pubupdateadd, .pubupdateedit")
                    .toggle();
                $(".pubupdatenew").removeAttr("disabled");
            }

            addnew = false;
        }
    });

    //pubadd, pubupdate = Edit row on edit button click
    $(document).on("click", ".pubaddedit, .pubupdateedit", function (e) {
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

        if ($(this).attr("class").includes("add")) {
            $(this).parents("tr").find(".pubaddadd, .pubaddedit").toggle();
            $(".pubaddnew").attr("disabled", "disabled");
        }

        if ($(this).attr("class").includes("update")) {
            $(this)
                .parents("tr")
                .find(".pubupdateadd, .pubupdateedit")
                .toggle();
            $(".pubupdatenew").attr("disabled", "disabled");
        }

        addnew = true;
    });

    //pubadd, pubupdate => Delete row on delete button click
    $(document).on("click", ".pubadddelete, .pubupdatedelete", function (e) {
        e.preventDefault();

        $(this).parents("tr").remove();

        $("table tbody")
            .find("tr")
            .each(function (index) {
                $($(this).find("td")[0]).text(index);
            });

        if ($(this).attr("class").includes("addadd")) {
            $(".pubaddnew").removeAttr("disabled");
        }

        if ($(this).attr("class").includes("updateadd")) {
            $(".pubupdatenew").removeAttr("disabled");
        }
        addnew = false;

        $(this).tooltip("hide");
    });

    // pubadd => check-box functionality
    $(".pubaddformcheck .form-check-input").click(function () {
        $(".pubaddformcheck .form-check-input")
            .not(this)
            .prop("checked", false);

        $("#pubaddlabeldate").text($(this).val() + " Date");
    });

    // pubadd => REFRESH FUNCTION
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

    // pubadd => ALLOW NUMERIC AND DECIMAL
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

    // pubadd => SAVE RECORDS IN DATABASE
    $(".pubaddbtnsubmit").click(function (e) {
        e.preventDefault();

        savedata("pubadd");
    });

    // PUBLICATION EDITVIEW SECTION ////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    // pubeditview => REFRESH PUBLICATION EDIT-VIEW
    function pubeditviewrefresh() {
        $(".pubeditviewcard")
            .find("input[type=text]")
            .each(function () {
                if (this.id === "pubeditviewdate") {
                    $("#" + this.id).val(new Date().getFullYear());
                } else {
                    $("#" + this.id).val("");
                }
            });

        $(".pubeditviewcard")
            .find("input[type=checkbox]")
            .each(function () {
                if (
                    this.id === "pubeditviewchecksubmitted" ||
                    this.id === "pubeditviewcheckaccepted" ||
                    this.id === "pubeditviewcheckpublished"
                ) {
                    $("#" + this.id).prop("checked", true);
                } else {
                    $("#" + this.id).prop("checked", false);
                }
            });

        $(".pubeditviewcard")
            .find("select")
            .each(function () {
                $("#" + this.id).prop("selectedIndex", 0);
            });

        $(".pubeditviewcard")
            .find("textarea")
            .each(function () {
                $("#" + this.id).val("");
            });

        $("table.pubeditviewtable tbody tr").remove();
    }

    // pubeditview => DATEPICKER
    $("#pubeditviewdate").datepicker({
        minViewMode: 2,
        autoclose: true,
        todayHighlight: true,
        format: "yyyy",
    });

    pubeditviewrefresh();

    // pubeditview => REFRESH FUNCTION PUBLICATION EDIT-VIEW
    $(".pubeditviewrefresh").click(function () {
        pubeditviewrefresh();
    });

    // pubeditview => AUTHOR SEARCH KEYUP IN INPUT TYPE TEXT
    $("#pubeditviewinputauthorsearch").keyup(function () {
        var query = $(this).val();

        if (query != "") {
            fetch_author_data(query);
        } else {
            $("table.pubeditviewtable tbody tr").remove();
        }
    });

    // pubeditview => fetch_author_data FOR MULIPLE AUTHOR SELECTION
    function fetch_author_data(query = "") {
        if (query != "") {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "GET",
                url: url + "/editviewauthorsearch",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                data: { query: query },
                success: function (data) {
                    $("tbody").html("");
                    if (data.table_data == undefined) {
                        $(".pubeditviewtable tr tbody").remove();
                    } else {
                        $(".pubeditviewtable tbody").html(data.table_data);
                    }
                },
                error: function (xhr, errorType) {
                    var responseTitle = $(xhr.responseText)
                        .filter("title")
                        .get(0);

                    swal("Error!", $(responseTitle).text() + "\n" + xhr);
                },
            });
        }
    }

    // pubeditview => SELECT/DESELECT CHECKBOXES IN AUTHOR TABLE
    $("#selectall").click(function () {
        if ($("table.pubeditviewtable tbody tr").length > 0) {
            var checkbox = $(
                'table.pubeditviewtable tbody input[type="checkbox"]'
            );

            if (this.checked) {
                checkbox.each(function () {
                    this.checked = true;
                });
            } else {
                checkbox.each(function () {
                    this.checked = false;
                });
            }
        }
    });

    // pubeditview => SELECT ALL OR NOT IN AUTHOR SEARCH
    $("body").on(
        "click",
        'table.pubeditviewtable tbody input[type="checkbox"]',
        function () {
            if (!this.checked) {
                $("#selectall").prop("checked", false);
            }
        }
    );

    // pubeditview => SEARCH BUTTON CLICK
    $(".pubeditviewbtnsearch").click(function (e) {
        e.preventDefault();
        search_data();
    });

    // pubeditview => SEARCH FUNCTION
    function search_data() {
        var dt = $("#pubeditviewdate").val();
        var authortype = $("#pubeditviewselectauthortype").val();
        var categoryeditview = $("#pubeditviewselectcategory").val();
        var nationality = $("#pubeditviewselectdemography").val();
        var title = $("#pubeditviewtextareatitle").val();
        var conference = $("#pubeditviewtextareanameofconference").val();
        var submitted = $("#pubeditviewchecksubmitted").is(":checked");
        var accepted = $("#pubeditviewcheckaccepted").is(":checked");
        var published = $("#pubeditviewcheckpublished").is(":checked");

        var objcheck = {};
        var arrRankingData = [];
        $(
            'main.pubeditview .select-field-ranking .pubeditviewdivul ul li input[type="checkbox"]'
        ).each(function () {
            if ($(this).is(":checked")) {
                objcheck = {
                    checked: $(this).val(),
                };

                arrRankingData.push(objcheck);
            }
        });

        var objselect = {};
        var arrAuthor = [];
        $('table.pubeditviewtable tbody input[type="checkbox"]').each(
            function () {
                if ($(this).is(":checked")) {
                    objselect = {
                        fullname: $(this).closest("tr").find("td:eq(1)").html(),
                    };

                    arrAuthor.push(objselect);
                }
            }
        );

        $.ajax({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            type: "POST",
            dataType: "text",
            url: url + "/displaysearch",
            data: {
                dt: dt,
                authortype: authortype != "0" ? authortype : null,
                category: categoryeditview != "0" ? categoryeditview : null,
                nationality: nationality != "0" ? nationality : null,
                submitted: submitted,
                accepted: accepted,
                published: published,
                title: title != "" ? title : null,
                conference: conference != "" ? conference : null,
                ranking: arrRankingData.length > 0 ? arrRankingData : null,
                author: arrAuthor.length > 0 ? arrAuthor : null,
            },
            success: function (data) {
                // console.log(JSON.parse(data));
                // if (JSON.parse(data).searchresult.length === 0) {

                if (data === "") {
                    $(".pubeditviewspan").removeClass("opacitydeactivate");
                    $(".pubeditviewspan").addClass("opacityactivate");
                } else {
                    $(".pubeditviewspan").removeClass("opacityactivate");
                    $(".pubeditviewspan").addClass("opacitydeactivate");
                }

                $("main.pubeditview .container .card.first").removeClass(
                    "sectionactive"
                );
                $("main.pubeditview .container .card.first").addClass(
                    "sectiondeactive"
                );
                $("main.pubeditview .container .card.second").css({
                    opacity: "1",
                    "pointer-events": "auto",
                });

                // $("table.pubeditviewtablesearchresult tbody tr").remove();
                // $.each(JSON.parse(data).searchresult, function (i, obj) {
                //     tabletr =
                //         "<tr>" +
                //         "<td style='display:none;'>" +
                //         obj.headerid +
                //         "</td>" +
                //         "<td style='display:none;'>" +
                //         obj.userid +
                //         "</td>" +
                //         "<td>" +
                //         obj.publicationdate +
                //         "</td>" +
                //         "<td style='display:none;'>" +
                //         obj.category +
                //         "</td>" +
                //         "<td>" +
                //         obj.title +
                //         "</td>" +
                //         "<td>" +
                //         obj.conf +
                //         "</td>" +
                //         "<td>" +
                //         obj.user +
                //         "</td>" +
                //         "<td id='pubeditviewlastchildtd'>" +
                //         "<a href='" +
                //         route("publication.update", {
                //             id: JSON.parse(data).departmentid,
                //             dept: JSON.parse(data).department,
                //         }) +
                //         "' class='pubeditviewview' title='View' data-toggle='tooltip' ><i class='material-icons'>&#xe8f4;</i></a>" +
                //         "<a class='pubeditviewedit' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>" +
                //         "<a class='pubeditviewdelete' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>" +
                //         "</td>" +
                //         "</tr>";

                //     $("table.pubeditviewtablesearchresult tbody").append(
                //         tabletr
                //     );
                // });

                $("table.pubeditviewtablesearchresult tbody").html(data);

                $('[data-toggle="tooltip"]').tooltip();
            },
            error: function (xhr, errorType) {
                var responseTitle = $(xhr.responseText).filter("title").get(0);

                console.log(xhr.responseText);

                swal("Error!", $(responseTitle).text() + "\n" + xhr);
            },
        });
    }

    $(".pubeditviewbtnback").click(function (e) {
        e.preventDefault();

        $("main.pubeditview .container .card.first").removeClass(
            "sectiondeactive"
        );
        $("main.pubeditview .container .card.first").addClass("sectionactive");
        $("main.pubeditview .container .card.second").css({
            opacity: "0",
            "pointer-events": "none",
        });
    });

    //pubeditview = hide tooltip
    $(document).on(
        "click",
        ".pubeditviewview, .pubeditviewedit, .pubeditviewdelete",
        function (e) {
            $(this).tooltip("hide");

            if ($(this).attr("class").includes("pubeditviewview")) {
                $("main.pubeditview .container .card.first").removeClass(
                    "sectiondeactive"
                );
                $("main.pubeditview .container .card.first").addClass(
                    "sectionactive"
                );
                $("main.pubeditview .container .card.second").css({
                    opacity: "0",
                    "pointer-events": "none",
                });
            }

            if ($(this).attr("class").includes("pubeditviewedit")) {
                $("main.pubeditview .container .card.first").removeClass(
                    "sectiondeactive"
                );
                $("main.pubeditview .container .card.first").addClass(
                    "sectionactive"
                );
                $("main.pubeditview .container .card.second").css({
                    opacity: "0",
                    "pointer-events": "none",
                });
            }

            if ($(this).attr("class").includes("pubeditviewdelete")) {
                headerid = $(this).closest("tr").find("td:eq(0)").text();

                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover record!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                }).then((willDelete) => {
                    if (willDelete) {
                        $.ajax({
                            headers: {
                                "X-CSRF-TOKEN": $(
                                    'meta[name="csrf-token"]'
                                ).attr("content"),
                            },
                            type: "POST",
                            dataType: "json",
                            url: url + "/deletesearch/" + headerid,
                            // data: $('#searchedit-form').serialize(),
                            success: function (data) {},
                            error: function (xhr, errorType) {
                                var responseTitle = $(xhr.responseText)
                                    .filter("title")
                                    .get(0);

                                console.log(xhr.responseText);

                                swal(
                                    "Error!",
                                    $(responseTitle).text() + "\n" + xhr
                                );
                            },
                        });

                        search_data();
                    } else {
                    }
                });
            }
        }
    );

    ////////

    // PUBLICATION UPDATE SECTION ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    if ($("#updatetype").val() !== undefined) {
        $("header .dept a i").removeClass("opacityactivate");
        $("header .dept a i").addClass("opacitydeactivate");

        category = $("#pubupdateselectcategory option:selected")
            .text()
            .toLowerCase();

        if (
            $("#updatetype")
                .val()
                .substring(0, $("#updatetype").val().length - 1) === "Edit"
        ) {
            $(".pubupdatebtnupdate").removeClass("opacitydeactivate");
            $(".pubupdatebtnupdate").addClass("opacityactivate");
            $(".pubupdatebtnupdate").css({ background: "#ffc107" });

            var categoryval = $(
                "#pubupdateselectcategory option:selected"
            ).val();

            if (categoryval == 8) {
                $("#pubupdateinputimpactfactor").prop("disabled", true);
            } else if (categoryval == 7) {
                $("#pubupdateselectarticle").prop("disabled", true);
            }
        } else if (
            $("#updatetype")
                .val()
                .substring(0, $("#updatetype").val().length - 1) === "Delete"
        ) {
            $(".pubupdatebtnupdate").removeClass("opacityactivate");
            $(".pubupdatebtnupdate").addClass("opacitydeactivate");
        } else {
            $("form.pubupdateform :input")
                .not(":button, :submit, :reset, :hidden")
                .prop("disabled", true);

            $(".pubupdatenew").prop("disabled", "disabled");

            $(".pubupdatebtnupdate").removeClass("opacityactivate");
            $(".pubupdatebtnupdate").addClass("opacitydeactivate");
        }
    } else {
        $("header .dept a i").removeClass("opacitydeactivate");
        $("header .dept a i").addClass("opacityactivate");
    }

    //pubupdate = next button click event
    $(".pubupdatebtnnext").click(function (e) {
        e.preventDefault();

        nextbutton("pubupdate");
    });

    //pubupdate = title keyup
    $("#pubupdatetextareatitle").keyup(function () {
        titleduplicate("pubupdate");
    });

    //pubupdate = conference keyup
    $("#pubupdatetextareanameofconference").keyup(function () {
        conferenceduplicate("pubupdate");
    });

    //pubupdate = Back button click event
    $(".pubupdatebtnback").click(function () {
        backbutton("pubupdate");
    });

    //pubupdate = pubupdateselectcategory > (select) change
    $("#pubupdateselectcategory").change(function () {
        categorychange("pubupdate");
    });

    //pubupdate => Append table with add row form on add new button click
    $(".pubupdatenew").click(function (e) {
        e.preventDefault();

        addnewentry("pubupdate");
    });

    //pubupdate => check-box functionality
    $(".pubupdateformcheck .form-check-input").click(function () {
        $(".pubupdateformcheck .form-check-input")
            .not(this)
            .prop("checked", false);

        $("#pubupdatelabeldate").text($(this).val() + " Date");
    });

    // pubupdate => SAVE RECORDS IN DATABASE
    $(".pubupdatebtnupdate").click(function (e) {
        e.preventDefault();
        savedata("pubupdate");
    });

    ////////

    // PUBLICATION BIBTEX SECTION ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    $(".pubbibbtndownload").click(function (e) {
        e.preventDefault();
    });

    ////////

    ////////////////////////////////////////////////////////////////////////
    ////////// Common functions //////////

    // NEXT BUTTON
    function nextbutton(element) {
        validationVoilated = false;

        // INPUT VALIDATION
        $("." + element + "form")
            .find("input")
            .each(function () {
                if (
                    this.id !== element + "inputvolumeno" &&
                    this.id !== element + "inputissueno" &&
                    this.id !== element + "inputpageno" &&
                    this.id !== element + "inputdoi"
                ) {
                    if (!$(this).val()) {
                        if (category.includes("conference")) {
                            if (this.id !== element + "inputimpactfactor") {
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
        $("." + element + "form")
            .find("textarea")
            .each(function () {
                if (!$(this).val()) {
                    var replacedid = this.id.replace("textarea", "label");
                    $("#" + replacedid).css({ color: "#ea1f25" });
                }
            });

        //SELECT VALIDATION
        // if (element != "pubupdate") {
        $("." + element + "form")
            .find("select")
            .each(function () {
                if (
                    $("#" + this.id)
                        .find(":selected")
                        .text() === ""
                ) {
                    if (category.includes("journal")) {
                        if (this.id !== element + "selectarticle") {
                            var replacedid = this.id.replace("select", "label");
                            $("#" + replacedid).css({ color: "#ea1f25" });
                        }
                    } else {
                        var replacedid = this.id.replace("select", "label");
                        $("#" + replacedid).css({ color: "#ea1f25" });
                    }
                }
            });
        // }

        //CHECKBOX VALIDATION
        var checked = false;
        $("." + element + "form")
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
            $("." + element + "form")
                .find('input[type="checkbox"]')
                .each(function () {
                    var replacedid = this.id.replace("check", "label");
                    $("#" + replacedid).css({ color: "#2e2e2e" });
                });
        } else {
            $("." + element + "form")
                .find('input[type="checkbox"]')
                .each(function () {
                    var replacedid = this.id.replace("check", "label");
                    $("#" + replacedid).css({ color: "#ea1f25" });
                });
        }

        //LABEL COLOR CHANGING PROCESS
        $("." + element + "form")
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
                $(
                    "main." + element + " .container form .card.first"
                ).removeClass("sectionactive");
                $("main." + element + " .container form .card.first").addClass(
                    "sectiondeactive"
                );

                $("main." + element + " .container form .card.second").css({
                    opacity: "1",
                    "pointer-events": "auto",
                });

                $("#" + element + "titledisplay").append(
                    $.trim($("#" + element + "textareatitle").val())
                );
            }
        }
    }

    // TITLE DUPLICATE
    function titleduplicate(element) {
        pub_dup_title = "";

        var title = $("#" + element + "textareatitle");

        //DUPLICATE TITLE CHECK
        if (title.val() != "") {
            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "POST",
                dataType: "text",
                url: url + "/gettitle",
                data: { duptitle: title.val() },
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
    }

    // CONFERENCE DUPLICATE
    function conferenceduplicate(element) {
        pub_dup_conference = "";

        var conference = $("#" + element + "textareanameofconference");

        //DUPLICATE CONFERENCE CHECK
        if (conference.val() != "") {
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
                    duptitle: conference.val(),
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
    }

    // BACK BUTTON
    function backbutton(element) {
        $("main." + element + " .container form .card.first").removeClass(
            "sectiondeactive"
        );
        $("main." + element + " .container form .card.first").addClass(
            "sectionactive"
        );
        $("main." + element + " .container form .card.second").css({
            opacity: "0",
            "pointer-events": "none",
        });
    }

    // CATEGORY CHANGE
    function categorychange(element) {
        // 1 - Conference
        // 2 - Journal

        category = $("#" + element + "selectcategory option:selected")
            .text()
            .toLowerCase();

        if (category.length > 0) {
            $("#" + element + "labelcategory").css({ color: "#2e2e2e" });
        }

        if (category.includes("conference")) {
            $("#" + element + "inputimpactfactor").prop("disabled", "disabled");
            $("#" + element + "inputimpactfactor").val("");
            $("#" + element + "selectarticle").removeAttr("disabled");

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
                    $("#" + element + "selectarticle").empty();

                    $("#" + element + "selectarticle").append(
                        '<option value="0" selected></option>'
                    );
                    $.each(data, function (key, value) {
                        $("#" + element + "selectarticle").append(
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
            $("#" + element + "labelimpactfactor").css({ color: "#2e2e2e" });
        } else {
            $("#" + element + "inputimpactfactor").removeAttr("disabled");
            $("#" + element + "selectarticle").prop("disabled", "disabled");
            $("#" + element + "selectarticle").empty();
            $("#" + element + "selectarticle").append(
                '<option value="0" selected></option>'
            );

            $("#" + element + "labelarticle").css({ color: "#2e2e2e" });
        }
    }

    // CHECK FOR ALL CHECKBOXES
    function checkforallcheckboxes(element) {
        $("." + element + "form")
            .find('input[type="checkbox"]')
            .each(function () {
                if (!$(this).checked) {
                    var replacedid = this.id.replace("check", "label");
                    $("#" + replacedid).css({ color: "#2e2e2e" });
                }
            });
    }

    // ADD NEW
    function addnewentry(element) {
        $(this).attr("disabled", "disabled");
        var index = $("." + element + "table tbody tr:last-child").index();
        var row =
            "<tr>" +
            "<td name='slno'>" +
            (parseInt($("table." + element + "table tr:last td:first").text()) +
                1) +
            "</td>" +
            '<td name="name"><input type="text" class="form-control"  id="name"></td>' +
            "<td>" +
            actions +
            "</td>" +
            "</tr>";

        $("." + element + "table").append(row);

        $("table." + element + "table tbody tr")
            .eq(index + 1)
            .find("." + element + "add, ." + element + "edit")
            .toggle();
        $('[data-toggle="tooltip"]').tooltip();

        addnew = true;
    }

    function savedata(element) {
        if (
            $("table." + element + "table tbody tr").length - 1 === 0 ||
            addnew
        ) {
            swal("", "Please enter Author details!", "info");
        } else {
            var tableArr = [];
            var weburl = "";

            if (element.includes("add")) {
                weburl = "/writetodb";
            } else if (element.includes("update")) {
                weburl = "/updatetodb";
            }

            $("table." + element + "table tbody tr")
                .not(":first")
                .each(function () {
                    tableArr.push({
                        slno: $(this).children("td").eq(0).text(),
                        name: $(this).children("td").eq(1).text(),
                    });
                });

            // var formdata = $("." + element + "form").serializeArray();
            // var data = {};
            // $(formdata).each(function (index, obj) {
            //     data[obj.name] = obj.value;
            // });

            $.ajax({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                        "content"
                    ),
                },
                type: "POST",
                dataType: "text",
                url: url + weburl,
                data: {
                    departmentid: $("#departmentid")
                        .val()
                        .substring(0, $("#departmentid").val().length - 1),
                    categoryid: $("#" + element + "selectcategory")
                        .find(":selected")
                        .val(),
                    authortypeid: $("#" + element + "selectauthortype")
                        .find(":selected")
                        .val(),
                    article: $("#" + element + "selectarticle")
                        .find(":selected")
                        .val(),
                    nationality: $("#" + element + "selectdemography")
                        .find(":selected")
                        .val(),
                    pubdate: $("#" + element + "inputdate").val(),
                    submitted: $("#" + element + "checksubmitted").is(
                        ":checked"
                    ),
                    accepted: $("#" + element + "checkaccepted").is(":checked"),
                    published: $("#" + element + "checkpublished").is(
                        ":checked"
                    ),
                    title: $("#" + element + "textareatitle").val(),
                    confname: $(
                        "#" + element + "textareanameofconference"
                    ).val(),
                    place: $("#" + element + "inputlocation").val(),
                    rankingid: $("#" + element + "selectranking")
                        .find(":selected")
                        .val(),
                    broadareaid: $("#" + element + "selectbroadarea")
                        .find(":selected")
                        .val(),
                    impactfactor: $("#" + element + "inputimpactfactor").val(),
                    volume: $("#" + element + "inputvolumeno").val(),
                    issue: $("#" + element + "inputissueno").val(),
                    pp: $("#" + element + "inputpageno").val(),
                    digitallibrary: $("#" + element + "inputdoi").val(),
                    publisher: $("#" + element + "inputpublisher").val(),
                    tabledata: tableArr,
                },
                success: function () {
                    if (element.includes("add")) {
                        swal("", "Record saved successfully!", "success");
                        pubaddrefresh();
                        $(
                            "main.pubadd .container form .card.first"
                        ).removeClass("sectiondeactive");
                        $("main.pubadd .container form .card.first").addClass(
                            "sectionactive"
                        );
                        $("main.pubadd .container form .card.second").css({
                            opacity: "0",
                            "pointer-events": "none",
                        });
                    } else if (element.includes("update")) {
                        swal({
                            title: "",
                            text: "Record saved successfully!",
                            icon: "success",
                        }).then(function () {
                            window.top.close();
                        });
                    }
                },

                error: function (xhr, errorType) {
                    var responseTitle = $(xhr.responseText)
                        .filter("title")
                        .get(0);

                    swal("Error!", $(responseTitle).text() + "\n" + xhr);
                },
            });
        }
    }

    ////////// Common functions //////////
});
