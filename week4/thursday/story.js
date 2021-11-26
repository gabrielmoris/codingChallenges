const { type } = require("os");
const readline = require("readline");
const chalk = require("chalk");
const gameInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const storyObject = {
    question: chalk.red("Wanna Play? [yes | no]"),
    answers: {
        yes: {
            question: chalk.red(
                "You may not realise yet, but I am inside your computer, I know EVERYTHING you do and all your information. I can make your life difficult, but... If you help me I can help you too. Are you agree?[yes|no]"
            ),
            answers: {
                yes: {
                    question: chalk.green(
                        "OKAY, you can read! Let´s go to the business... I came from Tuvalu, a little country in the middle of the Pacific Ocean. My nation is about to dissapear in few years because of your polluting behaviour...There is nothing you can do to help me about this. But you can help me in another topic. say YES if you understand on NO if you dont understand.[yes|no]"
                    ),
                    answers: {
                        yes: {
                            question: chalk.blue(
                                "Right answer, as I told you I would change ALL you passwords, share your personal information and even take all your money from your bank account and maybe send to charity. Let´s go to the business... My country is not well known, and my government gave me the task of making it well known for the people who destroyed it. You are about to answer some questions. You can do your research on Google wherever you want, I will be very imaginative with your punishment. are you ready? [yes| no]"
                            ),
                            answers: {
                                yes: {
                                    question: chalk.blue(
                                        "My country had a nother name before Tuvalu. this name was _____ Islands [ellice | isabel]"
                                    ),
                                    answers: {
                                        ellice: {
                                            question: chalk.blue(
                                                "Nice one! Let's go for the next: What is the predominant religion in our country? [muslim | anglican]"
                                            ),
                                            answers: {
                                                muslim: chalk.bgRed(
                                                    "Nope. Our visitors where from an European country!"
                                                ),
                                                anglican: {
                                                    question: chalk.blue(
                                                        "Very good!. Which is our politic system? [monarchy | republic]"
                                                    ),
                                                    answers: {
                                                        monarchy: {
                                                            question:
                                                                chalk.blue(
                                                                    "Well done!!! Do you know who reigns us? [isabel | Tuval] "
                                                                ),
                                                            answers: {
                                                                tuval: chalk.bgRed(
                                                                    "That name doesnt even exists... tonto."
                                                                ),
                                                                isabel: {
                                                                    question:
                                                                        chalk.green(
                                                                            "Last question: which is the country with the lowest maximum altitude of the world?[tuvalu | maldivas]"
                                                                        ),
                                                                    answers: {
                                                                        maldivas:
                                                                            chalk.bgGreen(
                                                                                "This is right, but after Maldivas our country is the next one, that is why it is going to dissapear... I leave you alone, it was a nice experience. I hope for both. Your computer is safe."
                                                                            ),
                                                                        tuvalu: chalk.bgGreen(
                                                                            "This is wrong!, but after Maldivas our country is the next one, that is why it is going to dissapear..."
                                                                        ),
                                                                    },
                                                                },
                                                            },
                                                        },
                                                        republic: chalk.red(
                                                            "Oh....No, we have a queen..."
                                                        ),
                                                    },
                                                },
                                            },
                                        },
                                        isabel: chalk.bgRed(
                                            "WRONG!!, you made me cry :("
                                        ),
                                    },
                                },
                                no: chalk.bgRed(
                                    "Accessing to your bank account... ... ... ... ... ... ... ... ..."
                                ),
                            },
                        },
                    },
                },
                no: {
                    question: chalk.red(
                        "Go for the glasses and read again: I came from Tuvalu, a little country in the middle of the Pacific Ocean. My nation is about to dissapear in few years because of your polluting behaviour... There is nothing you can do to help me about this. But you can help me in another topic. say YES if you understand on NO if you dont understand.[yes|no]"
                    ),
                    answers: {
                        yes: {
                            question: chalk.red("Okay, will you help me?"),
                            answers: {
                                yes: {
                                    //copiar desde aquí
                                    question: chalk.blue(
                                        "Right answer, as I told you I would change ALL you passwords, share your personal information and even take all your money from your bank account and maybe send to charity. Let´s go to the business... My country is not well known, and my government gave me the task of making it well known for the people who destroyed it. You are about to answer some questions. You can do your research on Google wherever you want, I will be very imaginative with your punishment. are you ready? [yes| no]"
                                    ),
                                    answers: {
                                        yes: {
                                            question: chalk.blue(
                                                "My country had a nother name before Tuvalu. this name was _____ Islands [ellice | isabel]"
                                            ),
                                            answers: {
                                                ellice: {
                                                    question: chalk.blue(
                                                        "Nice one! Let's go for the next: What is the predominant religion in our country? [muslim | anglican]"
                                                    ),
                                                    answers: {
                                                        muslim: chalk.bgRed(
                                                            "Nope. Our visitors where from an European country!"
                                                        ),
                                                        anglican: {
                                                            question:
                                                                chalk.blue(
                                                                    "Very good!. Which is our politic system? [monarchy | republic]"
                                                                ),
                                                            answers: {
                                                                monarchy: {
                                                                    question:
                                                                        chalk.blue(
                                                                            "Well done!!! Do you know who reigns us? [isabel | Tuval] "
                                                                        ),
                                                                    answers: {
                                                                        tuval: chalk.bgRed(
                                                                            "That name doesnt even exists... tonto."
                                                                        ),
                                                                        isabel: {
                                                                            question:
                                                                                chalk.green(
                                                                                    "Last question: which is the country with the lowest maximum altitude of the world?[tuvalu | maldivas]"
                                                                                ),
                                                                            answers:
                                                                                {
                                                                                    maldivas:
                                                                                        chalk.bgGreen(
                                                                                            "This is right, but after Maldivas our country is the next one, that is why it is going to dissapear... I leave you alone, it was a nice experience. I hope for both. Your computer is safe."
                                                                                        ),
                                                                                    tuvalu: chalk.bgGreen(
                                                                                        "This is wrong!, but after Maldivas our country is the next one, that is why it is going to dissapear..."
                                                                                    ),
                                                                                },
                                                                        },
                                                                    },
                                                                },
                                                                republic:
                                                                    chalk.red(
                                                                        "Oh....No, we have a queen..."
                                                                    ),
                                                            },
                                                        },
                                                    },
                                                },
                                                isabel: chalk.bgRed(
                                                    "WRONG!!, you made me cry :("
                                                ),
                                            },
                                        },
                                        no: chalk.bgRed(
                                            "Accessing to your bank account... ... ... ... ... ... ... ... ..."
                                        ),
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        no: chalk.bgRed("We´re not friends anymore :("),
    },
};

function playGame(storyObject) {
    gameInterface.question(storyObject.question, (answer) => {
        answer = answer.toLowerCase();
        if (storyObject.answers[answer] === undefined) {
            console.log(chalk.bgRed("It was your decision, not mine. Bye!!"));
            //  gameInterface.close();
            setTimeout(() => {
                console.log("I give you another opportunity, be smart.");
                playGame(storyObject);
            }, 5000);
            // playGame(storyObject);
        } else {
            if (typeof storyObject.answers[answer] === "string") {
                console.log(storyObject.answers[answer]);
                // gameInterface.close();
                setTimeout(() => {
                    console.log(
                        chalk.bgGreen(
                            "I'll give you another opportunity, be smart."
                        )
                    );
                    playGame(storyObject);
                }, 5000);
            } else {
                //keep playing on the substory
                storyObject = storyObject.answers[answer];
                playGame(storyObject);
            }
        }
    });
}
playGame(storyObject);
