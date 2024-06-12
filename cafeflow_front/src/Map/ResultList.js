import React, { useState, useEffect } from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import MainChat from "../Chat/MainChat";
import ChatPopup from "../Chat/ChatPopUp";

function getCongestionLevel(traffic) {
  if (traffic === "RED") {
    return "혼잡";
  } else if (traffic === "BLUE") {
    return "적정";
  } else if (traffic === "GREEN") {
    return "원활";
  } else {
    return "적정";
  }
}
function ResultList({ markersData, onMarkerClick }) {
  const allResults = markersData;
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedReceiverId, setSelectedReceiverId] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [senderId, setSenderId] = useState(null);

  const handleChatClick = (receiverId, itemId, name) => {
    setSelectedReceiverId(receiverId);
    setSelectedItemId(itemId);
    setSelectedName(name);
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setSelectedReceiverId(null);
    setSelectedItemId(null);
    setSelectedName(null);
  };

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (storedUserInfo) {
      setSenderId(storedUserInfo.id);
    }
  }, []);

  return (
    <div>
      <ul className="search-results">
        {allResults.length === 0 ? (
          <li>
            <h5>결과가 없습니다.</h5>
          </li>
        ) : (
          allResults.map((item) => (
            <li key={item.id} onClick={() => onMarkerClick(item)}>
              <span className="si-goo">{item.address}</span>
              <span className="maejang-name">
                {item.name} - {getCongestionLevel(item.traffic)}{" "}
                <span
                  className="congestion-indicator"
                  style={{
                    backgroundColor: item.traffic,
                    marginLeft: "10px",
                  }}
                ></span>
                {item.traffic === "RED" && (
                  <span style={{ marginLeft: "10px" }}>
                    예상 대기 시간 {item.watingTime}분
                  </span>
                )}
                <div
                  className={`description-box ${
                    hoveredItem === item.id ? "visible" : ""
                  }`}
                >
                  {item.detailAddress}
                </div>
              </span>
              <Link to={`/shop/${item.id}`}>
                <button className="chat-icon">
                  조회
                  <div className="chat-tooltip">매장 조회</div>
                </button>
              </Link>
              <button
                className="chat-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  handleChatClick(item.memberId, item.id, item.name);
                }}
              >
                <IoChatboxEllipsesOutline />
                <div className="chat-tooltip">1대1 문의</div>
              </button>
              {isChatOpen &&
                selectedReceiverId === item.memberId &&
                selectedItemId === item.id && (
                  <ChatPopup className="chat-popup">
                    <MainChat
                      userId={senderId}
                      cafeOwnerId={selectedReceiverId}
                      name={selectedName}
                      isUser={true}
                      onClose={handleCloseChat}
                    />
                  </ChatPopup>
                )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
export default ResultList;
