$('document').ready (function () {

    var guess = '';

    $('.start').click( function () { 

        alert("Make your choice");

        var userChoice = "";

        $('.choice1').on('click', function () {

             userChoice = $(this).text();

            $(this).css('background-color', '#3fddf5');

            $('.choice1').not($(this)).hide();
            $('.choice1').hover().css("box-shadow", "none")

            setTimeout(function () {

                var comp_choice = Math.random();

                if(comp_choice <= 0.33) {
                    guess = "Rock"
                }
                                    
                else if ((comp_choice >0.33) && (comp_choice <= 0.66)) {
                    guess = "Paper"
                }
                    
                else {
                    guess = "Scissors" 
                };
                    
                $('.choice2').each(function () {

                    if (guess == $(this).text()) {

                        $(this).css('background-color', '#f57f3b');

                    }
        
                    else {
                        $(this).hide();
                    };
                });

                setTimeout(function() {
                    if (((guess == "Rock") && (userChoice == "Paper")) || ((guess == "Paper") && (userChoice == "Scissors")) || ((guess == "Scissors") && (userChoice == "Rock"))) {
                        alert("You won!")
                    }
    
                    else if (((guess == "Paper") && (userChoice == "Rock")) || ((guess == "Rock") && (userChoice == "Scissors")) || ((guess == "Scissors") && (userChoice == "Paper"))) {
                        alert("You lost!")
                    }
                            
                    else {
                        alert("It's a tie!")
                    };
    
                }, 1000);

                setTimeout(function() {

                    if (confirm("Would you like to play again?") == true) {
                        history.go(0);
                    }

                    else {
                        alert("Sadness");
                        window.close();
                    };

                }, 1000)
                
            }, 2000);

        })
        
    })    
    
});