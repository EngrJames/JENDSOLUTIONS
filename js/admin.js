function updateMessage(){var t="<tr><th>Date</th><th>Name</th><th>Email</th><th>Topic</th><th>Message</th></tr>";for(i in messages)t+="<tr><td>"+new Date(messages[i][0]).toString().split("GMT")[0]+"</td><td>"+messages[i][1]+"</td><td>"+messages[i][2]+"</td><td>"+messages[i][3]+"</td><td>"+messages[i][4]+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[0]).html(t)}function updateConfirmedEmails(){var t="<tr><th>Date</th><th>email</th><th>ID</th><th>Name</th></tr>";for(i in confirmedEmails)t+="<tr><td>"+new Date(confirmedEmails[i][0]).toString().split("GMT")[0]+"</td><td>"+confirmedEmails[i][1]+"</td><td>"+confirmedEmails[i][2]+"</td><td>"+confirmedEmails[i][3]+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[1]).html(t)}function updateNewsletters(){var t="<tr><th>Date</th><th>email</th></tr>";for(i in newsletters)t+="<tr><td>"+new Date(newsletters[i][0]).toString().split("GMT")[0]+"</td><td>"+newsletters[i][1]+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[2]).html(t)}function updateAllSettings(){var t="<tr><th>Date</th><th>Name</th><th>ServiceWeb</th><th>ServiceData</th><th>ServicePack</th><th>ProductWeb</th><th>ProductData</th><th>ProductPack</th>    <th>ContractWeb</th><th>ContractData</th><th>ContractPack</th><th>Newsletter</th><th>contactType</th></tr>";for(i in allSettings)t+="<tr><td>"+new Date(allSettings[i][0]).toString().split("GMT")[0]+"</td><td>"+allSettings[i][1]+"</td><td>"+allSettings[i][2]+"</td>        <td>"+allSettings[i][3]+"</td><td>"+allSettings[i][4]+"</td><td>"+allSettings[i][5]+"</td><td>"+allSettings[i][6]+"</td><td>"+allSettings[i][7]+"</td>        <td>"+allSettings[i][8]+"</td><td>"+allSettings[i][9]+"</td><td>"+allSettings[i][10]+"</td><td>"+allSettings[i][11]+"</td><td>"+allSettings[i][12]+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[3]).html(t)}function updateAllProfiles(){var t="<tr><th>Date</th><th>Username</th><th>FirstName</th><th>MiddleName</th><th>LastName</th><th>Email</th><th>Phone</th><th>HouseNo</th>    <th>Street</th><th>City</th><th>State</th><th>Country</th></tr>";for(i in allProfiles)t+="<tr><td>"+new Date(allProfiles[i][0]).toString().split("GMT")[0]+"</td><td>"+allProfiles[i][1]+"</td><td>"+allProfiles[i][2]+"</td>        <td>"+allProfiles[i][3]+"</td><td>"+allProfiles[i][4]+"</td><td>"+allProfiles[i][5]+"</td><td>"+allProfiles[i][6]+"</td><td>"+allProfiles[i][7]+"</td>        <td>"+allProfiles[i][8]+"</td><td>"+allProfiles[i][9]+"</td><td>"+allProfiles[i][10]+"</td><td>"+allProfiles[i][11]+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[4]).html(t)}function updateAllContracts(){var t="<tr><th>Date</th><th>Username</th><th>ContractID</th><th>ContractType</th><th>ReadyDate</th><th>PaymentStatus</th><th>Requirement</th><th>ContactType</th>    <th>Status</th><th>UserId</th><th>buttonId</th></tr>";allContracts=allContracts.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in allContracts)t+="<tr><td>"+new Date(allContracts[i][0]).toString().split("GMT")[0]+"</td><td>"+allContracts[i][1]+"</td><td>"+allContracts[i][2]+"</td>        <td>"+allContracts[i][3]+"</td><td>"+allContracts[i][4]+"</td><td>"+allContracts[i][5]+"</td><td>"+allContracts[i][6]+"</td><td>"+allContracts[i][7]+"</td>        <td>"+allContracts[i][8]+"</td><td>"+allContracts[i][9]+"</td><td>"+allContracts[i][10]+'</td><td><a onclick=\'var x=document.getElementById("admini");x.userId.value="'+allContracts[i][9]+'";        x.ID.value="'+allContracts[i][2]+'";x.type.value="contract";$("#admini").slideDown(200);\'><i class=\'fa fa-pencil\'></i></a></td></tr>';t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[5]).html(t)}function updateAllSupports(){var t="<tr><th>Date</th><th>Username</th><th>SupportType</th><th>SupportId</th><th>Message</th><th>ContactType</th><th>UserId</th></tr>";allSupports=allSupports.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in allSupports)t+="<tr><td>"+new Date(allSupports[i][0]).toString().split("GMT")[0]+"</td><td>"+allSupports[i][1]+"</td><td>"+allSupports[i][2]+"</td>        <td>"+allSupports[i][3]+"</td><td>"+allSupports[i][4]+"</td><td>"+allSupports[i][5]+"</td><td>"+allSupports[i][6]+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[6]).html(t)}function updateTestimonials(){var t="<tr><th>Date</th><th>Username</th><th>UserID</th><th>Message</th><th>LoginType</th><th>Image</th></tr>";testimonials=testimonials.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in testimonials)t+="<tr><td>"+new Date(testimonials[i][0]).toString().split("GMT")[0]+"</td><td>"+testimonials[i][1]+"</td><td>"+testimonials[i][2]+"</td>        <td>"+testimonials[i][3]+"</td><td>"+testimonials[i][4]+"</td><td><img src='"+testimonials[i][5]+"' alt='image' style='height:20px;width:20px;'></td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[7]).html(t)}function updateAllServices(){var t="<tr><th>Date</th><th>Username</th><th>ServiceID</th><th>ServiceType</th><th>ReadDate</th><th>PaymentStatus</th>    <th>Requirement</th><th>ContactType</th><th>Status</th><th>UserID</th><th>ButtonID</th></tr>";allServices=allServices.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in allServices)t+="<tr><td>"+new Date(allServices[i][0]).toString().split("GMT")[0]+"</td><td>"+allServices[i][1]+"</td><td>"+allServices[i][2]+"</td>        <td>"+allServices[i][3]+"</td><td>"+allServices[i][4]+"</td><td>"+allServices[i][5]+"</td><td>"+allServices[i][7]+"</td>        <td>"+allServices[i][7]+"</td><td>"+allServices[i][8]+"</td><td>"+allServices[i][9]+"</td><td>"+allServices[i][10]+'</td><td><a onclick=\'var x=document.getElementById("admini");x.userId.value="'+allServices[i][9]+'";        x.type.value="service";x.ID.value="'+allServices[i][2]+"\";$(\"#admini\").slideDown(200);'><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[8]).html(t)}function updateAllProductTransactions(){var t="<tr><th>Date</th><th>UserID</th><th>ItemName</th><th>ItemNo</th><th>Quantity</th><th>UnitPrice</th>    <th>Amount</th><th>Total</th><th>ReceiptNo</th><th>TransactID</th><th>ApplicationType</th></th><th>DownloadStatus</th><th>DownloadDate</th></tr>";allProductTransactions=allProductTransactions.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in allProductTransactions)date=allProductTransactions[i][12],allProductTransactions[i][12]&&(date=new Date(allProductTransactions[i][12]).toString().split("GMT")[0]),t+="<tr><td>"+new Date(allProductTransactions[i][0]).toString().split("GMT")[0]+"</td><td>"+allProductTransactions[i][1]+"</td><td>"+allProductTransactions[i][2]+"</td>        <td>"+allProductTransactions[i][3]+"</td><td>"+allProductTransactions[i][4]+"</td><td>"+allProductTransactions[i][5]+"</td><td>"+allProductTransactions[i][7]+"</td>        <td>"+allProductTransactions[i][7]+"</td><td>"+allProductTransactions[i][8]+"</td><td>"+allProductTransactions[i][9]+"</td><td>"+allProductTransactions[i][10]+"</td><td>"+allProductTransactions[i][11]+"</td>        <td>"+date+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[9]).html(t)}function updateAllServiceTransactions(){var t="<tr><th>Date</th><th>UserID</th><th>ItemName</th><th>ServiceNo</th><th>Amount</th><th>PaymentProfileID</th>    <th>ApplicationType</th></tr>";allServiceTransactions=allServiceTransactions.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in allServiceTransactions)t+="<tr><td>"+new Date(allServiceTransactions[i][0]).toString().split("GMT")[0]+"</td><td>"+allServiceTransactions[i][1]+"</td><td>"+allServiceTransactions[i][2]+"</td>        <td>"+allServiceTransactions[i][3]+"</td><td>"+allServiceTransactions[i][4]+"</td><td>"+allServiceTransactions[i][5]+"</td><td>"+allServiceTransactions[i][6]+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[10]).html(t)}function updateAllContractTransactions(){var t="<tr><th>Date</th><th>UserID</th><th>ItemName</th><th>ContractNo</th><th>Amount</th><th>TotalPrice</th>    <th>ReceiptNo</th><th>TransactionID</th><th>ApplicationType</th></tr>";allContractTransactions=allContractTransactions.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in allContractTransactions)t+="<tr><td>"+new Date(allContractTransactions[i][0]).toString().split("GMT")[0]+"</td><td>"+allContractTransactions[i][1]+"</td><td>"+allContractTransactions[i][2]+"</td>        <td>"+allContractTransactions[i][3]+"</td><td>"+allContractTransactions[i][4]+"</td><td>"+allContractTransactions[i][5]+"</td><td>"+allContractTransactions[i][6]+"</td>        <td>"+allContractTransactions[i][7]+"</td><td>"+allContractTransactions[i][8]+"</td><td><a><i class='fa fa-pencil'></i></a></td></tr>";t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[11]).html(t)}function updateRegisteredUsers(){var t="<tr><th>Date</th><th>Name</th><th>Email</th><th>Password</th><th>Phone</th><th>UserID</th></tr>";registeredUsers=registeredUsers.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in registeredUsers)t+="<tr><td>"+new Date(registeredUsers[i][0]).toString().split("GMT")[0]+"</td><td>"+registeredUsers[i][1]+"</td><td>"+registeredUsers[i][2]+"</td>        <td>"+registeredUsers[i][3]+"</td><td>"+registeredUsers[i][4]+"</td><td>"+registeredUsers[i][5]+"</td><td><a onclick='var token=[\""+registeredUsers[i][0]+'","'+registeredUsers[i][1]+'","'+registeredUsers[i][2]+'","'+registeredUsers[i][5]+'","local"];        localStorage.setItem("accessToken",JSON.stringify(token));$().deleteAccount("admin")\'><i class=\'fa fa-pencil\'></i></a></td></tr>';t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[12]).html(t)}function updateGuestUsers(){var t="<tr><th>Date</th><th>Name</th><th>Email</th><th>UserID</th></tr>";guestUsers=removeDuplicates(guestUsers),guestUsers=guestUsers.sort(function(t,a){return t[0]>a[0]?-1:t[0]<a[0]?1:0});for(i in guestUsers)t+="<tr><td>"+new Date(guestUsers[i][0]).toString().split("GMT")[0]+"</td><td>"+guestUsers[i][1]+"</td><td>"+guestUsers[i][2]+"</td>        <td>"+guestUsers[i][3]+"</td><td><a onclick='var token=[\""+guestUsers[i][0]+'","'+guestUsers[i][1]+'","'+guestUsers[i][2]+'","'+guestUsers[i][3]+'","foreign"];        localStorage.setItem("accessToken",JSON.stringify(token));$().deleteAccount("admin")\'><i class=\'fa fa-pencil\'></i></a></td></tr>';t="<table style='width:100%'>"+t+"</table>",$($(".mycap")[13]).html(t)}var date;