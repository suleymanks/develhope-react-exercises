import { useState } from "react";

export default function UncontrolledLogin(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    checkbox: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onReset = () => {
    setFormData({
      username: "",
      password: "",
      checkbox: false,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">UNCONTROLLED LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <label className="block mb-2">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-md"
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">Remember me</label>
        </div>

        <button
          type="submit"
          onClick={props.onLogin}
          className="bg-blue-500 text-white py-2 px-4 rounded-md  "
        >
          Login
        </button>
        <button
          type="button"
          onClick={onReset}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md"
        >
          Reset
        </button>
      </form>
    </div>
  );
}
