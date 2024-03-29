#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 50000;
let mypin = Math.floor(Math.random() * 10 + 9564);
console.log(mypin);
console.log("\n\tWELCOME TO ATM SERIVCCE\t\n");
console.log("\n\tAvaible Balance And Access Account Pin Code\t\n" + "\n\tBalance " + mybalance + "\n\t\n\tPin Code " + mypin);
let pin = await inquirer.prompt([
    {
        message: "\n\tEnter your Pin Number",
        type: "number",
        name: "YourPin"
    }
]);
if (pin.YourPin === mypin) {
    console.log("\n\tCorrect Pin Number\t\n");
    let Account = await inquirer.prompt([
        {
            message: "\n\tSelect Your Account Categaries",
            type: "list",
            name: "Select",
            choices: ["CurrentAccount", "SavingAccount"]
        }
    ]);
    if (Account.Select === "CurrentAccount") {
        if (Account.Select === "SavingAccount") {
        }
        let answer = await inquirer.prompt([
            {
                message: "\n\tSelect the option to perform Action",
                type: "list",
                name: "select",
                choices: ["CashWithdraw", "CheckBalance"]
            }
        ]);
        if (answer.select === "Cashwithdraw") {
        }
        else if (answer.select === "CheckBalance") {
            console.log("\n\tYour Balance is " + "" + mybalance);
        }
        let check = await inquirer.prompt([
            {
                message: "\n\tHow Much Amount to Withdraw",
                type: "list",
                name: "select",
                choices: ["500", "1000", "5000", "10000", "Enter Other Amount"]
            }
        ]);
        if (check.Select === "500") {
            if (check.Select === "1000") {
                if (check.Select === "5000") {
                    if (check.Select === "10000") {
                        if (check.select === "Enter Other Amount") {
                        }
                    }
                }
            }
        }
        let confirm = await inquirer.prompt([
            {
                message: "\n\tPlease Confirm Withdraw Amount",
                type: "number",
                name: "select",
                choices: ["500", "1000", "5000", "10000"]
            },
        ]);
        if (mybalance -= confirm.select) {
            console.log("\n\tYour Remaining Balance" + " " + mybalance + "\n\n\t\tTransication Completed !\n\n\t\tTake It Your Cash");
        }
        if (check.Select === "500") {
            if (check.Select === "1000") {
                if (check.Select === "5000") {
                    if (check.Select === "10000") {
                        if (mybalance -= confirm.select) {
                            console.log(mybalance -= confirm.select);
                        }
                    }
                }
            }
        }
        if (answer.select === "CheckBalance") {
            console.log(mybalance);
        }
    }
}
else {
    console.log("\n\tEnter Invalid Pin Code");
}
let SavingAccount = "\n\t NOTE:  Please Sorry !!! \n\tSaving Account Serivce Down !";
console.log(SavingAccount);
/*if(saving)
console.log("\t\nPlease Sorry !!! \t\nSaving Account Serivce Down !")*/
