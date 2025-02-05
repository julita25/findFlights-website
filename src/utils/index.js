//import React from "react";
import { toast } from "react-toastify";

export const failureToast = (msg) => {
	toast(msg, {
		type: "error",
		position: "top-center",
		closeButton: false,
	});
};
