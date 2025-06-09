export default function Welcome() {
  const handleRedirect = () => {
    window.location.href = 'https://efch827.net/';
  };

  return (
    <>
      <style>{`
        .welcome-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #e0f2ff, #fefefe);
          padding: 1rem;
        }

        .welcome-box {
          background: #ffffff;
          padding: 2.5rem 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
        }

        .welcome-icon {
          width: 90px;
          height: 90px;
          animation: bounce 1.5s infinite;
          margin-bottom: 1.2rem;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .welcome-title {
          font-size: 2rem;
          font-weight: bold;
          color: #222;
          margin-bottom: 0.6rem;
        }

        .welcome-text {
          font-size: 1rem;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .welcome-button {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border: none;
          border-radius: 999px;
          background-color: #3b82f6;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .welcome-button:hover {
          background-color: #2563eb;
          transform: scale(1.05);
        }
      `}</style>

      <div className="welcome-container">
        <div className="welcome-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
            alt="Welcome"
            className="welcome-icon"
          />
          <h1 className="welcome-title">Chào mừng bạn!</h1>
          <p className="welcome-text">Nhấn nút bên dưới để tiếp tục.</p>
          <button className="welcome-button" onClick={handleRedirect}>
            Tiếp tục
          </button>
        </div>
      </div>
    </>
  );
}
