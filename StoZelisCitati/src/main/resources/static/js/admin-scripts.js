/*function findValueByKey(key,keyValueArray){
    const pair = keyValueArray.find(item => item.key === key);
    return pair ? pair.value : null;
}
*/



/*function renderRequests() {
    const data = document.getElementById('dataP');
    jsonData = data.innerText;
    const requestsContainer = document.getElementById('requestsContainer');
    requestsContainer.innerHTML = '';

    jsonData.forEach(databyte => {
        const requestElement = document.createElement('div');
        requestElement.classList.add('request');





        const keyValuePairs = JSON.stringify(databyte).match(/"([^"]+)":"([^"]+)"/g);




        requestElement.innerHTML = `
            <p><strong>Type:</strong> ${findValueByKey("tip", keyValuePairs)}</p>
            <p><strong>Name:</strong> ${findValueByKey("naziv",keyValuePairs)}</p>
            <p><strong>Email:</strong> ${findValueByKey("epošta",keyValuePairs)}</p>
            <p><strong>Telephone:</strong> ${findValueByKey("telefon",keyValuePairs)}</p>
            <div class="buttons">
                <button class="approve-btn" onclick="approveRequest(${signup.id})">Approve</button>
                <button class="reject-btn" onclick="rejectRequest(${signup.id})">Reject</button>
            </div>
            `;

        requestsContainer.appendChild(requestElement);
        console.log(databyte);

    });
}*/