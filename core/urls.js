module.exports = {
  getBank: {
    url: "/index.php/api/getBank",
    input: {},
    result: { id: "", bank: "", status: "" },
  },
  getBankFPX: {
    url: "/index.php/api/getBankFPX",
    input: {},
    result: { CODE: "", NAME: "" },
  },
  getPackage: {
    url: "/index.php/api/getPackage",
    input: {},
    result: { id: "", package: "", fee: "", status: "" },
  },
  createCategory: {
    url: "/index.php/api/createCategory",
    input: {},
    result: { CategoryCode: "" },
  },
  getCategoryDetails: {
    url: "/index.php/api/getCategoryDetails",
    input: {
      categoryCode: ""
    },
    result: {
      categoryName: "Makanan",
      categoryDescription: "",
      categoryStatus: "",
    },
  },
  createBill: {
    url: "/index.php/api/createBill",
    input: {
      userSecretKey: "",
      categoryCode: "",
      billName: "",
      billDescription: "",
      billPriceSetting: "",
      billPayorInfo: "",
      billAmount: "",
      billReturnUrl: "",
      billCallbackUrl: "",
      billExternalReferenceNo: "",
      billTo: "",
      billEmail: "",
      billPhone: "",
      billSplitPayment: { optional: true },
      billSplitPaymentArgs: { optional: true },
      billPaymentChannel: "",
      billDisplayMerchant: { optional: true },
      billContentEmail: { optional: true },
      billAdditionalField: { optional: true },
      billChargeToCustomer: "",
    },
    result: { BillCode: "" },
  },
  createBillMultiPayment: {
    url: "/index.php/api/createBillMultiPayment",
    input: {
      userSecretKey: "",
      categoryCode: "",
      billName: "",
      billDescription: "",
      billPriceSetting: "",
      billPayorInfo: "",
      billAmount: "",
      billReturnUrl: "",
      billCallbackUrl: "",
      billExternalReferenceNo: "",
      billTo: "",
      billEmail: "",
      billPhone: "",
      billSplitPayment: "",
      billSplitPaymentArgs: "",
      billMultiPayment: "",
      billPaymentChannel: { optional: true },
      billDisplayMerchant: { optional: true },
      billContentEmail: { optional: true },
    },
    result: { BillCode: "j0tzqhka" },
  },
  runBill: {
    url: "/index.php/api/runBill",
    input: {
      userSecretKey: "",
      billCode: "",
      billpaymentAmount: { optional: true },
      billpaymentPayorName: "",
      billpaymentPayorPhone: "",
      billpaymentPayorEmail: "",
      billBankID: { optional: true },
    },
    result: {},
  },
  getBillTransactions: {
    url: "/index.php/api/getBillTransactions",
    input: {},
    result: {
      billName: "",
      billDescription: "",
      billTo: "",
      billEmail: "",
      billPhone: "",
      billStatus: "1",
      billPermalink: "",
      categoryCode: "",
      categoryName: "",
      userName: "",
      billpaymentStatus: "",
      billpaymentAmount: "",
      billpaymentInvoiceNo: "",
    },
  }, // partnerType
  getAllBill: {
    url: "/admin/api/getAllBill",
    input: {
      userSecretKey: "",
      partnerType: "",
      "Year-month": "",
    },
    result: {
      billDate: "",
      ID: "",
      NAME: "",
      billDescription: "",
      fixPrice: "",
      billTo: "",
      billEmail: "",
      billPhone: "",
      billStatus: "",
      billCode: "",
      billAmount: "",
      categoryCode: "",
      categoryName: "",
      userName: "",
    },
  }, // enterprise
  createAccount: {
    url: "/index.php/api/createAccount",
    input: {
      Fullname: "",
      User: "",
      Email: "",
      Password: "",
      Phone: "",
      Bank: "",
      accountNo: "",
      accountHolderName: "",
      registrationNo: "",
      Package: "",
      Following: "",
    },
    result: { UserSecretKey: "" },
  }, // enterprise
  getUserStatus: {
    url: "/index.php/api/getUserStatus",
    input: {},
    result: { status: "" },
  }, // hybrid
  getAllUser: {
    url: "/admin/api/getAllUser",
    input: { userSecretKey: "", partnerType: "" },
    result: {
      userDate: "",
      userId: "",
      userName: "",
      registrationNo: "",
      userFullname: "",
      userEmail: "",
      userPhone: "",
      BankAccountNo: "",
      bankAccountName: "",
      bankName: "",
      userStatus: "",
    },
  }, // partnerType
  getSettlement: {
    url: "/admin/api/getSettlement",
    input: {
      userSecretKey: "",
      partnerType: "",
      detailByuserName: "",
    },
    result: {
      userID: "",
      userName: "",
      settlementDate: "",
      amount: "",
      amountNett: "",
      different: "",
      standard: "",
      santai: "",
      creditCard: "",
      transaction: "",
    },
  }, // partnerType
  getSettlementSummary: {
    url: "/admin/api/getSettlementSummary",
    input: {
      userSecretKey: "",
      userPartnerType: "",
      userName: "",
    },
    result: {
      userID: "",
      userName: "",
      today: "",
      Amount_Pending: "",
      Amount_settle: "",
      AmountNett_Pending: "",
      AmountNett_Settle: "",
      Different_Pending: "",
      Different_Settle: "",
      Standard_Pending: "",
      Standard_Settle: "",
      Santai_Pending: "",
      Santai_Settle: "",
      Creditcard_Pending: "",
      Creditcard_settle: "",
      Transaction_Pending: "",
      Trnsaction_Settle: "",
    },
  },
};
