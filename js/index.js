// JavaScript Document
const reset = () => {
    $("#game li").text("+");
    $("#game li").removeClass("disable");
    $("#game li").removeClass("o");
    $("#game li").removeClass("x");
    $("#game li").removeClass("btn-primary");
    $("#game li").removeClass("btn-info");
    count = 0;
};

const isOWon = () =>
    ($("#one").hasClass("o") &&
        $("#two").hasClass("o") &&
        $("#three").hasClass("o")) ||
    ($("#four").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#six").hasClass("o")) ||
    ($("#seven").hasClass("o") &&
        $("#eight").hasClass("o") &&
        $("#nine").hasClass("o")) ||
    ($("#one").hasClass("o") &&
        $("#four").hasClass("o") &&
        $("#seven").hasClass("o")) ||
    ($("#two").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#eight").hasClass("o")) ||
    ($("#three").hasClass("o") &&
        $("#six").hasClass("o") &&
        $("#nine").hasClass("o")) ||
    ($("#one").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#nine").hasClass("o")) ||
    ($("#three").hasClass("o") &&
        $("#five").hasClass("o") &&
        $("#seven").hasClass("o"));

const isXWon = () =>
    ($("#one").hasClass("x") &&
        $("#two").hasClass("x") &&
        $("#three").hasClass("x")) ||
    ($("#four").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#six").hasClass("x")) ||
    ($("#seven").hasClass("x") &&
        $("#eight").hasClass("x") &&
        $("#nine").hasClass("x")) ||
    ($("#one").hasClass("x") &&
        $("#four").hasClass("x") &&
        $("#seven").hasClass("x")) ||
    ($("#two").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#eight").hasClass("x")) ||
    ($("#three").hasClass("x") &&
        $("#six").hasClass("x") &&
        $("#nine").hasClass("x")) ||
    ($("#one").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#nine").hasClass("x")) ||
    ($("#three").hasClass("x") &&
        $("#five").hasClass("x") &&
        $("#seven").hasClass("x"));

$(document).ready(function() {
    var x = "x";
    var o = "o";
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    var size = 3;

    click = thisObj => {
        if (isOWon()) {
            alert("O has won the game. Start a new game");
            reset();
        } else if (isXWon()) {
            alert("X wins has won the game. Start a new game");
            reset();
        } else if (count == size * size) {
            alert("Its a tie. It will restart.");
            reset();
        } else if ($(this).hasClass("disable")) {
            alert("Already selected");
        } else if (count % 2 == 0) {
            count++;
            thisObj.text(o);
            thisObj.addClass("disable o btn-primary");
            if (isOWon()) {
                alert("O wins");
                count = 0;
                o_win++;
                $("#o_win").text(o_win);
            }
        } else {
            count++;
            thisObj.text(x);
            thisObj.addClass("disable x btn-info");
            if (isXWon()) {
                alert("X wins");
                count = 0;
                x_win++;
                $("#x_win").text(x_win);
            }
        }
    };

    $("#board-size-input").on("change", function(e) {
        size = e.target.value;
        reset();
        $("#game").empty();
        for (var i = 0; i < size; i++) {
            $("#game").append(
                $("<tr></tr>").append(() => {
                    var rowCells = "";
                    for (var j = 0; j < size; j++) {
                        rowCells = rowCells.concat(
                            "",
                            `<td id=${"" +
                                (i * size + j + 1)} class="btn span1">+</td>`
                        );
                    }
                    return rowCells;
                })
            );
        }
        // for (var i = 0; i < size * size; i++) {
        //     $("#game").append(
        //         $("<td>+</td>")
        //             .attr({ id: "" + (i + 1) })
        //             .addClass("btn span1")
        //     );
        // }
        $("#game td").click(function() {
            click($(this));
        });
    });

    $("#game li").click(function() {
        click($(this));
    });

    $("#reset").click(function() {
        reset();
    });
});
