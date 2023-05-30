import React from "react";

const UserButton = ({ circleFill, pathStroke, className }) => (
  <React.Fragment>
    <svg
      className={`h-11 w-11 ${className}`}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="31" cy="31" r="31" fill={circleFill} />
      <path
        d="M46 48V45.2617C46 43.4167 46 42.4951 45.774 41.7416C45.4953 40.8087 44.9678 39.9589 44.2419 39.2735C43.516 38.588 42.616 38.0899 41.628 37.8268C40.83 37.6134 39.854 37.6134 37.9 37.6134H24.1C22.146 37.6134 21.17 37.6134 20.372 37.8268C19.384 38.0899 18.484 38.588 17.7581 39.2735C17.0322 39.9589 16.5047 40.8087 16.226 41.7416C16 42.4951 16 43.4167 16 45.2617V48M40.4 21.6747C40.4 25.9144 36.64 29.3514 32 29.3514C27.36 29.3514 23.6 25.9144 23.6 21.6747C23.6 17.4351 27.36 14 32 14C36.64 14 40.4 17.437 40.4 21.6747Z"
        stroke={pathStroke}
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </React.Fragment>
);

export default UserButton;
