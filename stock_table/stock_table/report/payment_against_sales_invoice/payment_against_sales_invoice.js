// Copyright (c) 2016, Hardik Gadesha and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Payment Against Sales Invoice"] = {
	"filters": [
		{
		    "fieldname": "customer",
	            "label": __("Customer Name"),
	            "fieldtype": "Link",
		    "options": "Customer"
		}
	]
}
