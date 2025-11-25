// TASK 15: Using Python or PHP or Java or Ruby or JavaScript
// Write a program that takes input of someone's basic salary and benefits,
//  adds them to find the gross salary then uses  the gross salary to find the NHIF. 
// To find the Kenya NHIF Rate using THIS LINK:  
// Write a normal program but use functions if you feel comfortable.

// Employee's Monthly Gross Salary(Kshs)	Monthly NHIF Contribution (Kshs)
// 5,999	150
// 6,000 - 7,999	300
// 8,000 - 11,999	400
// 12,000 - 14,999	500
// 15,000 - 19,999	600
// 20,000 - 24,999	750
// 25,000 - 29,999	850
// 30,000 - 34,999	900
// 35,000 - 39,999	950
// 40,000 - 44,999	1,000
// 45,000 - 49,999	1,100
// 50,000 - 59,999	1,200
// 60,000 - 69,999	1,300
// 70,000 - 79,999	1,400
// 80,000 - 89,999	1,500
// 90,000 - 99,999	1,600
// 100,000 and above	1,700
function gross_salary(basic_salary, benefits) {
            let gross1_salary = basic_salary + benefits
            return gross1_salary
        }
        let b_salary = Number(prompt('enter basic salary'))
        let b_fits = Number(prompt('enter benefits'))
        let total_gross = gross_salary(b_salary, b_fits)
        
        console.log(total_gross, "gross")



        function nhif(gros_salary) {

            let nhif_contribution = 0
            if (gros_salary > 0 && gros_salary <= 5999) {
                nhif_contribution = 150
            }
            else if (gros_salary >= 6000 && gros_salary <= 7999) {
                nhif_contribution = 300
            }
            else if (gros_salary >= 8000 && gros_salary <= 11999) {
                nhif_contribution = 400
            }
            else if (gros_salary >= 12000 && gros_salary <= 14999) {
                nhif_contribution = 500
            }
            else if (gros_salary >= 15000 && gros_salary <= 19000) {
                nhif_contribution = 600
            }
            else if (gros_salary >= 20000 && gros_salary <= 24999) {
                nhif_contribution = 750
            }
            else if (gros_salary >= 25000 && gros_salary <= 29999) {
                nhif_contribution = 850
            }
            else if (gros_salary >= 30000 && gros_salary <= 34999) {
                nhif_contribution = 900
            }
            else if (gros_salary >= 35000 && gros_salary <= 39999) {
                nhif_contribution = 950
            }
            else if (gros_salary >= 40000 && gros_salary <= 44999) {
                nhif_contribution = 1000
            }
            else if (gros_salary >= 45000 && gros_salary <= 49999) {
                nhif_contribution = 1100
            }
            else if (gros_salary >= 50000 && gros_salary <= 59999) {
                nhif_contribution = 1200
            }
            else if (gros_salary >= 60000 && gros_salary <= 69999) {
                nhif_contribution = 1300
            }
            else if (gros_salary >= 70000 && gros_salary <= 79999) {
                nhif_contribution = 1400
            }
            else if (gros_salary >= 80000 && gros_salary <= 89999) {
                nhif_contribution = 1500
            }
            else if (gros_salary >= 90000 && gros_salary <= 99999) {
                nhif_contribution = 1600
            }
            else if (gros_salary >= 90000 && gros_salary <= 99999) {
                nhif_contribution = 1600
            }
            else {
                nhif_contribution = 1700

            }
            return nhif_contribution
        }

        let gros_salary=Number(prompt('enter the gross salary: '))

        let total_nhif = nhif(gros_salary)
        console.log(total_nhif, 'nhif')




// TASK 16: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the program above, then use  the gross salary to find the NSSF. 
// To find the Kenya NSSF Rate  using 6% of the Gross Salary.
// BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
// Write a normal program but use functions if you feel comfortable.

  function calc_nssf(x, rate = 0.06) {
            let total_nhif = 0
            if (x >= 0 && x <= 18000) {
                total_nhif = (x * rate)
            }
            else {
                total_nhif = 18000 * 0.06
            }
            return total_nhif
        }
        let x_gross = Number(prompt('enter the gross salary: '));
        let rate_1 = 0.06;

        let NSSF = calc_nssf(x_gross, rate_1)
        console.log(NSSF, 'nssf')






// Task 17: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.015
// Write a normal program but use functions if you feel comfortable.

 function nhdf(gs, rate = 0.015) {
            let calc_nhdf = gs * rate
            return calc_nhdf
        }

        let gs_gross = Number(prompt('enter the gross salary: '));
        let rate_2 = 0.015;

        let NHDF = nhdf(gs_gross, rate_2)
        console.log(NHDF, 'nhdf')





// Task 18: Using Python or PHP or Java or Ruby or JavaScript
// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 
// Write a normal program but use functions if you feel comfortable.
 function taxable_income(gs, ns, nh) {
            let tax_income = gs - ((ns + nh))
            return tax_income
        }

        let gs1_gross = Number(prompt('enter the gross salary: '))
        let ns = Number(prompt('enter nssf: '))
        let nh = Number(prompt('enter nhif: '))

        let totaltax_income = taxable_income(gs1_gross, ns, nh)
        console.log(totaltax_income, "tax_income")




// TASK 19: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and find the person's 
// PAYEE using the taxable income above.
// Find the Kenya PAYEE Tax Rate using THIS LINK
// Write a normal program but use functions if you feel comfortable.
 function calc_payee(tax) {
            let payee = 0
            let relief = 2400

            if (tax > 0 && tax <= 24000) {
                payee = 0
            }
            else if (tax >= 24000 && tax <= 32333) {
                payee = (24000 * 0.1) + ((tax - 24000) * 0.25) - (relief)
            }
            else {
                payee = (24000 * 0.1) + (8333 * 0.25) + ((tax - 32333) * 0.3) - (relief)
            }
            return payee
        }

        let tax = Number(prompt('enter the tax: '))

        let total_payee = calc_payee(tax)
        console.log(total_payee, 'total_payee')





// Task 20: Using Python or PHP or Java or Ruby or JavaScript
// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)
// Write a normal program but use functions if you feel comfortable.
 function calc_net_salary(grss, nhf, ndf, nsf, paye) {
            let my_salary = grss - (nhf + ndf + nsf + paye)
            return my_salary
        }

        let grss = Number(prompt('enter gross salary: '));
        let nhf = Number(prompt(' enter nhif: '));
        let ndf = Number(prompt('enter ndf: '));
        let nsf = Number(prompt('enter nssf: '));
        let paye = Number(prompt('enter payee: '));


        let net_salary = calc_net_salary(grss, nhf, ndf, nsf, paye);
        console.log(net_salary, 'net_salary')








// MILESTONE TASK Using Python or PHP or Java or Ruby or JavaScript
// Create a class called Payroll whose major task is to calculate an individual’s
//  Net Salary by getting the inputs basic salary and benefits. 
// Create 5 different class methods which will calculate the payee, 
// nhif_deductions, nhdf_deductions, nssf_deductions, gross_salary and net_salary. 
