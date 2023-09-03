
function showChat(message) {
    // 태그 생성
    const chatLog = document.getElementById("chatLog");
    const row = document.createElement("tr");
    const chat = document.createElement("td");

    // 전체 container
    const messageContainer = document.createElement("div");
    messageContainer.className = "message-container";
    if (message.senderName === myName) {
        messageContainer.classList.add("sent-by-me");
    }

    // 발신자 이름
    const senderNameDiv = document.createElement("div");
    senderNameDiv.className = "sender-name";
    senderNameDiv.textContent = message.senderName;

    // 메시지 내용
    const messageTextDiv = document.createElement("div");
    messageTextDiv.className = "message-text";
    messageTextDiv.textContent = message.text;

    // 발신 날짜
    const createdTimeDiv = document.createElement("div");
    createdTimeDiv.className = "created-time";
    createdTimeDiv.textContent = formatDateTime(message.createdTime);

    //container에 담기
    messageContainer.appendChild(senderNameDiv);
    messageContainer.appendChild(messageTextDiv);
    messageContainer.appendChild(createdTimeDiv);

    // table에 추가
    chat.appendChild(messageContainer);
    row.appendChild(chat);
    chatLog.appendChild(row);
}

function formatDateTime(dateTime) {
    // numeric or 2-digit :  숫자, long or short : 문자
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateTime).toLocaleDateString('ko-KR', options);
}