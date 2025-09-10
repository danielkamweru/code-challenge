function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter Basic Salary:"));
    let benefits = parseFloat(prompt("Enter Benefits:"));

        let grossSalary = basicSalary + benefits;

    
    let nssf = Math.min(grossSalary * 0.06, 2160);
    function calculateNHIF(salary) {
        if (salary <= 5999) return 150;
        else if (salary <= 7999) return 300;
        else if (salary <= 11999) return 400;
        else if (salary <= 14999) return 500;
        else if (salary <= 19999) return 600;
        else if (salary <= 24999) return 750;
        else if (salary <= 29999) return 850;
        else if (salary <= 34999) return 900;
        else if (salary <= 39999) return 950;
        else if (salary <= 44999) return 1000;
        else if (salary <= 49999) return 1100;
        else if (salary <= 59999) return 1200;
        else if (salary <= 69999) return 1300;
        else if (salary <= 79999) return 1400;
        else if (salary <= 89999) return 1500;
        else if (salary <= 99999) return 1600;
        else return 1700;
    }


    let nhif = calculateNHIF(grossSalary);
    let taxableIncome = grossSalary - nssf;
    function calculatePAYE(income) {
        let tax = 0;

        if (income <= 24000) {
            tax = income * 0.10;
        } else if (income <= 32333) {
            tax = (24000 * 0.10) + ((income - 24000) * 0.25);
        } else {
            tax = (24000 * 0.10) + (8333 * 0.25) + ((income - 32333) * 0.30);
        }
        tax = tax - 2400;
        if (tax < 0) tax = 0;

        return tax;
    }
    let payee = calculatePAYE(taxableIncome);
    let netSalary = grossSalary - (nssf + nhif + payee);


    alert(
        "Gross Salary: " + grossSalary +
        "\nNSSF: " + nssf +
        "\nNHIF: " + nhif +
        "\nTaxable Income: " + taxableIncome +
        "\nPAYE: " + payee +
        "\nNet Salary: " + netSalary
    );
}
calculateNetSalary();