import React from "react";

const ProfilePage = () => {
  return (
    <section className="profile bg-dark text-light py-5">
      <div className="container">
        {/* Profile Info */}
        <div className="profile-header text-center mb-5">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="rounded-circle mb-3"
            style={{ width: "150px", height: "150px" }}
          />
          <h2 className="username">John Doe</h2>
          <p className="user-email text-muted">johndoe@example.com</p>
        </div>

        {/* Account Sections */}
        <div className="sections">
          <div className="section my-4">
            <h3>Watchlist</h3>
            <div className="watchlist d-flex gap-4 overflow-auto">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div className="movie-card" key={index}>
                    <img
                      src="https://via.placeholder.com/120x180"
                      alt="Movie Thumbnail"
                      className="rounded-3"
                    />
                    <p className="mt-2 text-center">Movie Title</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="section my-4">
            <h3>History</h3>
            <p>Your recently watched movies will appear here.</p>
          </div>
        </div>

        {/* Log Out */}
        <div className="logout text-center mt-5">
          <button className="btn btn-danger">Log Out</button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
