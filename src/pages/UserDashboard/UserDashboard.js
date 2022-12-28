import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserDashboard.css";
import { getUser, editUser } from "../../provider/APIprovider";
import { userSlice } from "../../store/slices/userSlice";

const UserDashboard = () => {
  const token = useSelector((state) => state.token.value);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setEditing] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  async function fetchUserData() {
    const user = await getUser(token);
    dispatch(userSlice.actions.saveUser(user));
    setIsLoading(false);
    return user;
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEdit = () => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEditing(true);
  };
  const handleSubmit = async () => {
    const editName = await editUser(token, firstName, lastName);
    setEditing(false);
    if (editName) {
      dispatch(
        userSlice.actions.saveUser({
          ...user,
          firstName,
          lastName,
        })
      );
    }
  };

  return isLoading ? (
    <div className="loader">is Loading</div>
  ) : (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {!isEditing && (
            <div>
              {user.firstName + " " + user.lastName}!
              <button className="edit-button" onClick={handleEdit}>
                Edit Name
              </button>
            </div>
          )}
          {isEditing && (
            <div>
              <input
                type="text"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <button className="save-button" onClick={handleSubmit}>
                Save
              </button>
              <button
                className="cancel-button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </h1>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default UserDashboard;
