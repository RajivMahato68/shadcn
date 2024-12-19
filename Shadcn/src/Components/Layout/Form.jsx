import { useState } from "react";
import Login from "./Login";
import { RegisterForm } from "./Register";

export default function Form() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleShowRegisterForm = () => {
    setShowRegisterForm(true);
  };

  const handleHideRegisterForm = () => {
    setShowRegisterForm(false);
  };

  return (
    <div>
      {!showRegisterForm ? (
        <Login onRegisterClick={handleShowRegisterForm} />
      ) : (
        <RegisterForm onCancel={handleHideRegisterForm} />
      )}
    </div>
  );
}
