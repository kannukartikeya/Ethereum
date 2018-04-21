//  Web3 intializer
//  ABI definition, Binary Data and contract Address in contractDetails.js

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var kycContract = web3.eth.contract(abi);
var deployedContract = kycContract.new({
    data: binaryData,
    from: web3.eth.accounts[0],
    gas: 4700000
});
var contractInstance = kycContract.at(contractAddress);

//  account to make all transactions
var current_account = localStorage.bank_eth_account;
var user_name = localStorage.user_name_m;

//  function to fill details of the customer in the form

function fillForm() {
    var oldData = contractInstance.viewCustomer.call(user_name, {
        from: current_account,
        gas: 4700000
    });
    var toFill = "";
    for (var i = 0, j = 0; i < (oldData.length - 2); ++i) {
        if (oldData[i] == '!' && oldData[i + 1] == '@' && oldData[i + 2] == '#') {
            if (j == 9) {
                if (toFill = "Male")
                    document.getElementById("gender_m").checked = true;
                else
                    document.getElementById("gender_f").checked = true;
                j += 2;
                i += 2;
                toFill = "";
                continue;
            }
            document.getElementById(allIds[j]).value = toFill;
            toFill = "";
            j++;
            i += 2;
            continue;
        }
        toFill = toFill + oldData[i];
    }
}

//  fill the form

fillForm();

//  function to modify customer data based on changes made in the form

function onClickModify() {
    var Data = getInfo();
    if (Data == undefined) {
        alert("Valid details required!");
        window.location = '../bankHomePage.html';
        return false;
    }
    var check = contractInstance.modifyCustomer.call(user_name, Data, {
        from: current_account,
        gas: 4700000
    });
    if (check == 7) {
        alert("Access denied!");
        window.location = '../bankHomePage.html';
        return false;
    } else if (check == 1) {
        alert("Username not found!");
        window.location = '../bankHomePage.html';
        return false;
    } else {
        contractInstance.modifyCustomer.sendTransaction(user_name, Data, {
            from: current_account,
            gas: 4700000
        });
        alert("Customer profile successfully modified! Check the customer details from the view form tab. Thank you!");
        window.location = '../bankHomePage.html';
        return false;
    }
}

//  function to extract data from the filled form


function getInfo() {
    var data = document.getElementById("legal_name").value + "!@#" + document.getElementById("tax_id").value + "!@#" + document.getElementById("bus_desc").value + "!@#" + document.getElementById("bus_type").value + "!@#" +
		document.getElementById("fir_sign").value + "!@#" +
	    document.getElementById("sec_sign").value + "!@#" + 
		document.getElementById("thi_sign").value + "!@#" + document.getElementById("tot_annu_rev").value + "!@#" + document.getElementById("as_of_dat").value + "!@#";
    if (document.getElementById("gender_m").checked)
        data = data + "Public";
    else
        data = data + "Private";
    data = data + "!@#" + document.getElementById("address").value + "!@#" + document.getElementById("phone_1").value + "!@#" + document.getElementById("phone_2").value + "!@#" + document.getElementById("email").value + "!@#" + document.getElementById("country_res").value + "!@#";

    return data;
}

//  function to delete the KYC profile

function onClickDelete() {
    if (window.confirm("Are you sure you want to delete the KYC profile " + user_name + " ?") == false) {
        window.location = '../bankHomePage.html';
        return false;
    }
    if (contractInstance.removeCustomer.call(user_name, {
            from: current_account,
            gas: 4700000
        }) == 1) {
        alert("Customer not found!");
        window.location = '../bankHomePage.html';
        return false;
    }
    contractInstance.removeCustomer.sendTransaction(user_name, {
        from: current_account,
        gas: 4700000
    });
    alert("Customer successfully removed!");
    window.location = '../bankHomePage.html';
    return false;
}