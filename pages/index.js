import { useEffect } from 'react';

export default function Welcome() {

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://efch827.net/';
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .welcome-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to bottom right, #e0f2ff, #ffffff);
        }

        .welcome-box {
          background: #fff;
          padding: 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 360px;
          width: 100%;
        }

        .welcome-icon {
          width: 80px;
          height: 80px;
          animation: bounce 1.5s infinite;
          margin-bottom: 1rem;
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
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .welcome-text {
          color: #666;
          margin-bottom: 1rem;
        }

        .progress-bar {
          width: 100%;
          height: 10px;
          background-color: #ddd;
          border-radius: 5px;
          overflow: hidden;
        }

        .progress-fill {
          width: 100%;
          height: 100%;
          background-color: #3b82f6;
          animation: fill 3s linear forwards;
        }

        @keyframes fill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>

      <div className="welcome-container">
        <div className="welcome-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/744/744922.png"
            alt="Welcome"
            className="welcome-icon"
          />
          <h1 className="welcome-title">Welcome!</h1>
          <p className="welcome-text">Redirecting you shortly...</p>
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
        </div>
      </div>
    </>
  );
}
