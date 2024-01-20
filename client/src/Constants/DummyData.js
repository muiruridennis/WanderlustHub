export const vendorData = [
  {
    id: 1,
    name: "ABC Hotel",
    email: "info@abchotel.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "123 Main Street",
      city: "Cityville",
      state: "Stateville",
      zip: "12345"
    },
    serviceType: "Hotel",
    paymentMethod: "Bank Transfer",
    paymentDetails: "Account: 12345678",
    invoiceDueDate: "2023-09-15",
    contractTerms: "Agreed to provide accommodation services",
    contractExpiryDate: "2024-12-31",
    notes: "Requires advance notice for large bookings",
    paymentHistory: [
      {
        date: "2023-09-01",
        amount: 1500,
        invoiceNumber: "INV-12345",
        paymentMethod: "Credit Card",
        transactionID: "TXN-67890",
        status: "Paid",
        notes: "Payment for monthly service",
      },
      {
        date: "2023-08-15",
        amount: 1200,
        invoiceNumber: "INV-12346",
        paymentMethod: "Bank Transfer",
        transactionID: "TXN-67891",
        status: "Paid",
        notes: "Payment for outstanding balance",
      },
    ],
    invoicesForVendor: [
      {
        date: "2023-09-10",
        amount: 2000,
        invoiceNumber: "INV-12347",
        paymentMethod: "Credit Card",
        transactionID: "TXN-67892",
        status: "Paid",
        notes: "Payment for event catering",
        dueDate: "2023-09-10",
      },
      {
        date: "2023-08-25",
        amount: 800,
        invoiceNumber: "INV-12348",
        paymentMethod: "Bank Transfer",
        transactionID: "TXN-67893",
        status: "Pending",
        notes: "Payment for transportation services",
        dueDate: "2023-09-10",

      },]
  },
  {
    id: 2,
    name: "City Tours & Travel",
    email: "info@citytours.com",
    phoneNumber: "555-987-6543",

    address: {
      street: "456 Travel Lane",
      city: "Tour City",
      state: "Travelsville",
      zip: "54321"
    },
    serviceType: "Tour Operator",
    paymentMethod: "PayPal",
    paymentDetails: "PayPal: citytours@paypal.com",
    invoiceDueDate: "2023-08-25",
    contractTerms: "Handles guided tours for our customers",
    contractExpiryDate: "2023-12-15",
    notes: "Requires at least 2 weeks notice for custom tours",
    paymentHistory: [
      {
        date: "2023-09-01",
        amount: 1500,
        invoiceNumber: "INV-12345",
        paymentMethod: "Credit Card",
        transactionID: "TXN-67890",
        status: "Paid",
        notes: "Payment for monthly service",
      },
      {
        date: "2023-08-15",
        amount: 1200,
        invoiceNumber: "INV-12346",
        paymentMethod: "Bank Transfer",
        transactionID: "TXN-67891",
        status: "Paid",
        notes: "Payment for outstanding balance",
      },
    ],
    invoicesForVendor: [
      {
        date: "2023-09-05",
        amount: 1000,
        invoiceNumber: "INV-12349",
        paymentMethod: "PayPal",
        transactionID: "TXN-67894",
        status: "Paid",
        notes: "Payment for guided tour services",
        dueDate: "2023-09-10",
      },
      {
        date: "2023-08-20",
        amount: 600,
        invoiceNumber: "INV-12350",
        paymentMethod: "Credit Card",
        transactionID: "TXN-67895",
        status: "Pending",
        notes: "Payment for customized tour package",
        dueDate: "2023-09-10",

      },
      // Add more invoice entries as needed
    ],
  },
  {
    "id": 3,
    name: "Transportation Co.",
    email: "info@transportco.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "789 Transport Avenue",
      city: "Transit Town",
      state: "Driverstate",
      zip: "98765"
    },
    serviceType: "Transportation",
    paymentMethod: "Credit Card",
    paymentDetails: "Visa ending in 1234",
    invoiceDueDate: "2023-08-31",
    contractTerms: "Provides airport transfers for our customers",
    contractExpiryDate: "2023-11-30",
    notes: "Need to confirm vehicle availability before each booking",
    paymentHistory: [
      { date: "2023-08-15", amount: 1000 },
      { date: "2023-07-20", amount: 800 },
    ],
    invoicesForVendor: [
      {
        date: "2023-09-02",
        amount: 500,
        invoiceNumber: "INV-12351",
        paymentMethod: "Credit Card",
        transactionID: "TXN-67896",
        status: "Paid",
        notes: "Payment for airport transfers",
        dueDate: "2023-09-10",

      },
      {
        date: "2023-08-18",
        amount: 300,
        invoiceNumber: "INV-12352",
        paymentMethod: "Bank Transfer",
        transactionID: "TXN-67897",
        status: "Pending",
        notes: "Payment for city transportation",
        dueDate: "2023-09-10",

      },
      // Add more invoice entries as needed
    ],
  },

  {
    "id": 4,
    name: "Adventure Guides",
    email: "info@adventureguides.com",
    phoneNumber: "555-123-4567",

    address: {
      street: "789 Outdoor Lane",
      city: "Adventureville",
      state: "Explorestate",
      zip: "56789"
    },
    serviceType: "Adventure Tours",
    paymentMethod: "Credit Card",
    paymentDetails: "MasterCard ending in 5678",
    invoiceDueDate: "2023-09-30",
    contractTerms: "Offers thrilling outdoor adventure experiences",
    contractExpiryDate: "2023-12-31",
    notes: "Participants must sign liability waiver",
    paymentHistory: [
      { date: "2023-08-15", amount: 1000 },
      { date: "2023-07-20", amount: 800 },
    ],
    invoicesForVendor: [
      {
        date: "2023-09-08",
        amount: 1200,
        invoiceNumber: "INV-12355",
        paymentMethod: "Cash",
        transactionID: "TXN-67900",
        status: "Paid",
        notes: "Payment for catering services",
        dueDate: "2023-09-10",

      },
      {
        date: "2023-08-22",
        amount: 900,
        invoiceNumber: "INV-12356",
        paymentMethod: "Cash",
        transactionID: "TXN-67901",
        status: "Pending",
        notes: "Payment for event catering",
        dueDate: "2023-09-10",

      },
      // Add more invoice entries as needed
    ],
  },
  {
    "id": 5,
    name: "Catering Delights",
    email: "info@cateringdelights.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "123 Catering Street",
      city: "Feastville",
      state: "Flavorstate",
      zip: "98765"
    },
    serviceType: "Catering Services",
    paymentMethod: "Cash",
    paymentDetails: "Payable on delivery",
    invoiceDueDate: "2023-09-20",
    contractTerms: "Provides catering for events and functions",
    contractExpiryDate: "2023-12-31",
    notes: "Custom menu options available",
    paymentHistory: [
      { date: "2023-08-15", amount: 1000 },
      { date: "2023-07-20", amount: 800 },
    ],
    invoicesForVendor: [
      {
        date: "2023-09-10",
        amount: 800,
        invoiceNumber: "INV-12353",
        paymentMethod: "Credit Card",
        transactionID: "TXN-67898",
        status: "Paid",
        notes: "Payment for outdoor adventure experience",
        dueDate: "2023-09-10",

      },
      {
        date: "2023-08-25",
        amount: 600,
        invoiceNumber: "INV-12354",
        paymentMethod: "Credit Card",
        transactionID: "TXN-67899",
        status: "Paid",
        notes: "Payment for guided hiking tour",
        dueDate: "2023-09-10",
      },
      // Add more invoice entries as needed
    ],
  },
  {
    "id": 6,
    name: "Sightseeing Cruises",
    email: "info@cruisesightseeing.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "456 Cruise Lane",
      city: "Cruise City",
      state: "Seaville",
      zip: "45678"
    },
    serviceType: "Cruise Tours",
    paymentMethod: "Online Payment",
    paymentDetails: "Website: www.cruisesightseeing.com/payment",
    invoiceDueDate: "2023-08-31",
    contractTerms: "Offers scenic cruises along the coastline",
    contractExpiryDate: "2024-03-15",
    notes: "Bookings must be made in advance"
  },
  {
    "id": 7,
    name: "Artistic Decorations",
    email: "info@artisticdecor.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "789 Art Street",
      city: "Creativeville",
      state: "Artstate",
      zip: "23456"
    },
    serviceType: "Event Decorations",
    paymentMethod: "Bank Transfer",
    paymentDetails: "Account: 98765432",
    invoiceDueDate: "2023-09-10",
    contractTerms: "Provides artistic decorations for events and parties",
    contractExpiryDate: "2023-12-31",
    notes: "Custom theme designs available"
  },
  {
    "id": 8,
    name: "Gourmet Delights",
    email: "info@gourmetdelights.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "123 Gourmet Lane",
      city: "Culinaryville",
      state: "Flavorstate",
      zip: "54321"
    },
    serviceType: "Gourmet Food Delivery",
    paymentMethod: "Credit Card",
    paymentDetails: "Amex ending in 7890",
    invoiceDueDate: "2023-09-25",
    "contractTerms": "Delivers gourmet meals to customers",
    contractExpiryDate: "2023-12-31",
    notes: "Requires 24-hour notice for orders"
  },
  {
    "id": 9,
    name: "Tech Solutions",
    email: "info@techsolutions.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "456 Tech Lane",
      city: "Techville",
      state: "Innovatestate",
      zip: "34567"
    },
    serviceType: "IT Services",
    paymentMethod: "Invoice",
    paymentDetails: "Invoice emailed to info@techsolutions.com",
    invoiceDueDate: "2023-09-30",
    "contractTerms": "Provides IT solutions and support",
    contractExpiryDate: "2024-06-30",
    notes: "Emergency support available 24/7"
  },
  {
    "id": 10,
    name: "Floral Elegance",
    email: "info@floralelegance.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "789 Floral Street",
      city: "Blossomville",
      state: "Flowerstate",
      zip: "87654"
    },
    serviceType: "Floral Arrangements",
    paymentMethod: "Credit Card",
    paymentDetails: "Visa ending in 9876",
    invoiceDueDate: "2023-09-15",
    "contractTerms": "Provides elegant floral arrangements for events",
    contractExpiryDate: "2023-12-31",
    notes: "Accepts custom arrangement requests"
  },
  {
    "id": 11,
    name: "Audio Visual Productions",
    email: "info@avproductions.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "123 AV Avenue",
      city: "Media City",
      state: "Productionstate",
      zip: "23456"
    },
    serviceType: "Audio Visual Services",
    paymentMethod: "Bank Transfer",
    paymentDetails: "Account: 56789012",
    invoiceDueDate: "2023-09-10",
    contractTerms: "Offers audio visual production services",
    contractExpiryDate: "2023-12-31",
    notes: "Advanced booking recommended for events"
  },
  {
    "id": 12,
    name: "Fitness Studio",
    email: "info@fitnessstudio.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "456 Fitness Lane",
      city: "Healthville",
      state: "Wellnessstate",
      zip: "12345"
    },
    serviceType: "Fitness Classes",
    paymentMethod: "Membership",
    paymentDetails: "Monthly membership fee",
    invoiceDueDate: "2023-09-05",
    contractTerms: "Provides fitness classes and training sessions",
    contractExpiryDate: "Open-ended",
    notes: "New class schedules released monthly"
  },
  {
    "id": 13,
    name: "Green Landscapes",
    email: "info@greenlandscapes.com",
    phoneNumber: "555-123-4567",
    address: {
      street: "789 Garden Street",
      city: "Natureville",
      state: "Gardenstate",
      zip: "98765"
    },
    serviceType: "Landscaping Services",
    paymentMethod: "Check",
    paymentDetails: "Payable to Green Landscapes LLC",
    invoiceDueDate: "2023-09-25",
    contractTerms: "Offers professional landscaping and gardening services",
    contractExpiryDate: "2024-03-31",
    notes: "Free consultation for new projects"
  }
]

export const incomeData = [
  {
    id: 1,
    date: "2023-08-01",
    source: "Tour Package A",
    amount: 2000,
    category: "Tour Sales",
    status: "Received",
    description: "Guided tour to destination X",
    paymentMethod: "Credit Card",
    payerInfo: "John Doe",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "USD",
    referenceNumber: "BK123456",
    confirmationStatus: "Confirmed",
    attachment: "receipt.pdf",
  },
  {
    id: 2,
    date: "2023-08-05",
    source: "Tour Package B",
    amount: 1800,
    category: "Tour Sales",
    status: "Received",
    description: "Adventure tour to destination Y",
    paymentMethod: "PayPal",
    payerInfo: "Jane Smith",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "EUR",
    referenceNumber: "BK789012",
    confirmationStatus: "Confirmed",
    attachment: "receipt.pdf",
  },
  {
    id: 3,
    date: "2023-08-10",
    source: "Hotel Booking",
    amount: 1200,
    category: "Accommodation Revenue",
    status: "Received",
    description: "Luxury suite reservation",
    paymentMethod: "Cash",
    payerInfo: "Michael Johnson",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "GBP",
    referenceNumber: "BK345678",
    confirmationStatus: "Confirmed",
    attachment: "receipt.pdf",
  },
  {
    id: 4,
    date: "2023-08-15",
    source: "Airline Tickets",
    amount: 800,
    category: "Flight Revenue",
    status: "Pending",
    description: "Round-trip tickets to destination Z",
    paymentMethod: "Credit Card",
    payerInfo: "Alice Williams",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "USD",
    referenceNumber: "BK567890",
    confirmationStatus: "Pending",
    attachment: "booking_confirmation.pdf",
  },
  {
    id: 5,
    date: "2023-08-20",
    source: "Tour Package C",
    amount: 2500,
    category: "Tour Sales",
    status: "Received",
    description: "Cultural tour to destination A",
    paymentMethod: "Bank Transfer",
    payerInfo: "Robert Davis",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "EUR",
    referenceNumber: "BK234567",
    confirmationStatus: "Confirmed",
    attachment: "receipt.pdf",
  },
  {
    id: 6,
    date: "2023-08-25",
    source: "Car Rental",
    amount: 400,
    category: "Car Rental Revenue",
    status: "Received",
    description: "Rental of compact car",
    paymentMethod: "Credit Card",
    payerInfo: "Maria Garcia",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "USD",
    referenceNumber: "BK678901",
    confirmationStatus: "Confirmed",
    attachment: "rental_invoice.pdf",
  },
  {
    id: 7,
    date: "2023-08-28",
    source: "Tour Package D",
    amount: 1500,
    category: "Tour Sales",
    status: "Received",
    description: "Nature tour to destination B",
    paymentMethod: "PayPal",
    payerInfo: "Daniel Martinez",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "USD",
    referenceNumber: "BK123456",
    confirmationStatus: "Confirmed",
    attachment: "receipt.pdf",
  },
  {
    id: 8,
    date: "2023-09-03",
    source: "Cruise Package",
    amount: 3000,
    category: "Cruise Sales",
    status: "Pending",
    description: "Luxury cruise to destination C",
    paymentMethod: "Credit Card",
    payerInfo: "Sophia Anderson",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "USD",
    referenceNumber: "BK345678",
    confirmationStatus: "Pending",
    attachment: "booking_confirmation.pdf",
  },
  {
    id: 9,
    date: "2023-09-08",
    source: "Tour Package E",
    amount: 2200,
    category: "Tour Sales",
    status: "Received",
    description: "Adventure tour to destination D",
    paymentMethod: "Bank Transfer",
    payerInfo: "Liam Brown",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "EUR",
    referenceNumber: "BK567890",
    confirmationStatus: "Confirmed",
    attachment: "receipt.pdf",
  },
  {
    id: 10,
    date: "2023-09-12",
    source: "Hotel Booking",
    amount: 900,
    category: "Accommodation Revenue",
    status: "Received",
    description: "Standard room reservation",
    paymentMethod: "Credit Card",
    payerInfo: "Olivia Smith",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "USD",
    referenceNumber: "BK789012",
    confirmationStatus: "Confirmed",
    attachment: "receipt.pdf",
  },
  {
    id: 11,
    date: "2023-09-18",
    source: "Tour Package F",
    amount: 1800,
    category: "Tour Sales",
    status: "Received",
    description: "Sightseeing tour to destination E",
    paymentMethod: "PayPal",
    payerInfo: "Noah Johnson",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "USD",
    referenceNumber: "BK234567",
    confirmationStatus: "Confirmed",
    attachment: "receipt.pdf",
  },
  {
    id: 12,
    date: "2023-09-22",
    source: "Airline Tickets",
    amount: 1200,
    category: "Flight Revenue",
    status: "Pending",
    description: "One-way ticket to destination F",
    paymentMethod: "Credit Card",
    payerInfo: "Emma Davis",
    recipientInfo: "Your Travel Agency",
    accountInfo: "Bank of Travel, Account #56789",
    currency: "EUR",
    referenceNumber: "BK678901",
    confirmationStatus: "Pending",
    attachment: "booking_confirmation.pdf",
  },
  // Add more income entries here...
];

export const expensesData = [
  {
    id: 1,
    category: 'Operational Costs',
    description: 'Office rent and utilities',
    amount: 1500,
    date: '2023-01-15',
    status: 'Approved',
    approver: 'John Doe',
    vendor: "AAA Marchants",
    isOperatingExpense: true,
  },
  {
    id: 2,
    category: 'Marketing',
    description: 'Social media advertising',
    amount: 500.00,
    date: '2023-07-02',
    status: "pending",
    approver: 'John Doe',
    vendor: "AAA Marchants",
  },
  {
    id: 3,
    category: 'Operational Costs',
    description: 'Tour guides and staff',
    amount: 7500,
    date: '2023-07-15',
    status: "Approved",
    approver: 'John Doe',
    vendor: "AAA Marchants",
    isOperatingExpense: true
  },
  {
    id: 4,
    category: 'Transportation',
    description: 'Vehicle maintenance',
    amount: 800,
    date: '2023-06-20',
    status: "Approved ",
    approver: 'John K',
    vendor: "AAA Marchants"


  },
  {
    id: 5,
    category: 'Marketing',
    description: 'Brochure printing',
    amount: 300,
    date: '2023-08-10',
    status: "Approved",
    approver: 'Bonia',
    vendor: "AAA Marchants"


  },
  {
    id: 6,
    category: 'Employee Salaries',
    description: 'Driver salaries',
    amount: 1200,
    date: '2023-07-28',
    status: "pending",
    approver: 'Bonia',
    vendor: "AAA Marchants",
    isOperatingExpense: true
  },
  {
    id: 7,
    category: 'Operational Costs',
    description: 'Booking system software',
    amount: 250,
    date: '2023-09-05',
    status: "pending",
    approver: 'Bonia',
    vendor: "AAA Marchants",
    isOperatingExpense: true

  },
  {
    id: 8,
    category: 'Marketing',
    description: 'Online travel platform fees',
    amount: 700,
    date: '2023-08-18',
    status: "pending",
    approver: 'Bonia',
    vendor: "AAA Marchants"

  },
  {
    id: 9,
    category: 'Employee Salaries',
    description: 'Support staff',
    amount: 950,
    date: '2023-09-15',
    status: "pending",
    approver: 'Bonia',
    vendor: "Take-us",
    isOperatingExpense: true

  },
  {
    id: 10,
    category: 'Operational Costs',
    description: 'Equipment maintenance',
    amount: 400,
    date: '2023-07-22',
    status: "pending",
    approver: 'Bonia',
    vendor: "Burduzzz",
    isOperatingExpense: true


  },
  {
    id: 11,
    category: 'Mischallenious Services',
    description: 'petty maintenance',
    amount: 4540,
    date: '2023-02-22',
    status: "Approved",
    approver: 'Bonia',
    vendor: "AAsioA Marchants"


  },
];
export const userData = [
  {
    name: "Jan",
    "Active User": 4000,
  },
  {
    name: "Feb",
    "Active User": 3000,
  },
  {
    name: "Mar",
    "Active User": 5000,
  },
  {
    name: "Apr",
    "Active User": 4000,
  },
  {
    name: "May",
    "Active User": 3000,
  },
  {
    name: "Jun",
    "Active User": 2000,
  },
  {
    name: "Jul",
    "Active User": 4000,
  },
  {
    name: "Agu",
    "Active User": 3000,
  },
  {
    name: "Sep",
    "Active User": 4000,
  },
  {
    name: "Oct",
    "Active User": 1000,
  },
  {
    name: "Nov",
    "Active User": 4000,
  },
  {
    name: "Dec",
    "Active User": 3000,
  },
];

export const productData = [
  {
    name: "Jan",
    "Sales": 4000,
  },
  {
    name: "Feb",
    "Sales": 3000,
  },
  {
    name: "Mar",
    "Sales": 5000,
  },
];

export const userRows = [
  {
    id: 1,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 2,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 3,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 4,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 5,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 6,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 7,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 8,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 9,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
  {
    id: 10,
    username: "Jon Snow",
    avatar:
      "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jon@gmail.com",
    status: "active",
    transaction: "$120.00",
  },
];
export const headCells = [
  {
    id: 'profileImage',
    numeric: false,
    disablePadding: false,
    label: 'User',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'phoneNumber',
    numeric: false,
    disablePadding: false,
    label: 'Phone Number',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'address',
    numeric: false,
    disablePadding: false,
    label: 'Address',
  },
  {
    id: 'package',
    numeric: false,
    disablePadding: false,
    label: 'Last Package',
  },
  {
    id: 'Groupt',
    numeric: false,
    disablePadding: false,
    label: 'Group',
  },
  {
    id: 'Action',
    numeric: false,
    disablePadding: false,
    label: 'Actions',
  },
  {
    id: 'Action2',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];

export const productRows = [
  {
    id: 1,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 2,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 3,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 4,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 5,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 6,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 7,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 8,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 9,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
  {
    id: 10,
    name: "Apple Airpods",
    img:
      "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    stock: 123,
    status: "active",
    price: "$120.00",
  },
];

export const transactionsData = [
  {
    id: 1,
    details: "Tour Package Payment",
    type: "Payment",
    date: "2023-07-15",
    reference: "REF-12345",
    amount: "$150.00",
    status: "pending",
    paymentMethod: "unknown",
    isApproved: false,
  },
  {
    id: 2,
    details: "Hotel Booking Payment",
    type: "Payment",
    date: "2023-07-20",
    reference: "REF-67890",
    amount: "$300.00",
    status: "success",
    paymentMethod: "Mpesa",
    isApproved: false,


  },
  {
    id: 3,
    details: "Flight Booking Payment",
    type: "Payment",
    date: "2023-07-25",
    reference: "REF-54321",
    amount: "$200.00",
    status: "success",
    paymentMethod: "Mpesa",
    isApproved: true,


  },
  {
    id: 4,
    details: "Car Rental Payment",
    type: "Payment",
    date: "2023-08-01",
    reference: "REF-98765",
    amount: "$100.00",
    status: "success",
    paymentMethod: "Bank Transfer",
    isApproved: true,


  },
  {
    id: 5,
    details: "Tour Package Payment",
    type: "Payment",
    date: "2023-08-05",
    reference: "REF-13579",
    amount: "$180.00",
    status: "success",
    paymentMethod: "Points redemption",
    isApproved: true,


  },
  {
    id: 6,
    details: "Hotel Booking Payment",
    type: "Payment",
    date: "2023-08-10",
    reference: "REF-24680",
    amount: "$250.00",
    status: "success",
    paymentMethod: "points redemption",
    isApproved: true,


  },
  {
    id: 7,
    details: "Tour Package Payment",
    type: "Payment",
    date: "2023-08-15",
    reference: "REF-11223",
    amount: "$120.00",
    status: "success",
    paymentMethod: "Bank",
    isApproved: true,


  },
  {
    id: 8,
    details: "Car Rental Payment",
    type: "Payment",
    date: "2023-08-20",
    reference: "REF-44556",
    amount: "$80.00",
    status: "fail",
    paymentMethod: "Cash",
    isApproved: true,


  },
  {
    id: 9,
    details: "Flight Booking Payment",
    type: "Payment",
    date: "2023-08-25",
    reference: "REF-77889",
    amount: "$270.00",
    status: "success",
    paymentMethod: "Cash",
    isApproved: true,


  },
  {
    id: 10,
    details: "Tour Package Payment",
    type: "Payment",
    date: "2023-08-30",
    reference: "REF-99000",
    amount: "$190.00",
    status: "fail",
    paymentMethod: "Mpesa",
    isApproved: true,


  },
];

export const activities = [
  {
    id: 1,
    activity: "Logged in to the app",
    timestamp: "2023-07-25 10:00 AM",
  },
  {
    id: 2,
    activity: "Booked a guided city tour",
    timestamp: "2023-07-25 12:30 PM",
  },
  {
    id: 3,
    activity: "Cancelled a hotel reservation",
    timestamp: "2023-07-26 09:15 AM",
  },
  {
    id: 4,
    activity: "Joined a group hiking adventure",
    timestamp: "2023-07-27 08:45 AM",
  },
  {
    id: 5,
    activity: "Attended a cultural festival",
    timestamp: "2023-07-28 03:00 PM",
  },
  {
    id: 6,
    activity: "Viewed available flight options",
    timestamp: "2023-07-29 11:30 AM",
  },
  {
    id: 7,
    activity: "Added a cooking class to favorites",
    timestamp: "2023-07-30 10:45 AM",
  },
];


export const bookingsData = [
  {
    "id": 1,
    "status": "Pending",
    "bookedAtDate": "2023-03-01T15:51:32.569Z",
    "updatedDate": "2023-03-01T15:51:32.569Z",
    "user": {
      "id": 6,
      "name": "lewis Omung'e",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 2,
      "name": "Lala Nasi 1",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 6000,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 1654,
      "amountPaid": 6567,
      "payingPhoneNumber": "254723032500",
      "transactionDate": "2023-03-01T15:51:32.428Z",
      "mpesaReceiptNumber": "RC10SC98HQ",
      "merchantRequestID": "15202-60660817-1",
      "checkoutRequestID": "ws_CO_01032023215128602723032500"
    }
  },
  {
    "id": 2,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Jamal Ahmed",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 4600,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 434,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 43554,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 43454545,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 43433322,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 12353,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 43445433,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 4348887,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 4354544,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 655434,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 555434,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 55433434,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 46756534,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 436656764,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 437878784,
    "status": "complete",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 4377878784,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 43408887,
    "status": "unknown",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 4554334,
    "status": "complete",
    "bookedAtDate": "2023-03-04T06:58:38.360Z",
    "updatedDate": "2023-03-04T06:58:38.360Z",
    "user": {
      "id": 6,
      "name": "Allan Pontius",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 122,
      "name": "Amboseli",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 2784,
      "amountPaid": 7899,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:58:38.252Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "37399-40406510-1",
      "checkoutRequestID": "ws_CO_04032023125833203722370171"
    }
  },
  {
    "id": 3,
    "status": "Pending",
    "bookedAtDate": "2023-03-04T06:59:30.744Z",
    "updatedDate": "2023-03-04T06:59:30.744Z",
    "user": {
      "id": 6,
      "name": "Anna Wanja",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 2,
      "name": "Lala Nasi 1",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 6000,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 3,
      "amountPaid": 5700,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T06:59:30.656Z",
      "mpesaReceiptNumber": null,
      "merchantRequestID": "21938-14288302-1",
      "checkoutRequestID": "ws_CO_04032023125928156722370171"
    }
  },
  {
    "id": 4,
    "status": "complete",
    "bookedAtDate": "2023-03-04T07:00:00.254Z",
    "updatedDate": "2023-03-04T07:00:00.254Z",
    "user": {
      "id": 6,
      "name": "Adrew Ammmquire",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 3444,
      "name": "Coast",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 4,
      "amountPaid": 7800,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T07:00:00.174Z",
      "mpesaReceiptNumber": "RC41Z4HCWV",
      "merchantRequestID": "37397-40411400-1",
      "checkoutRequestID": "ws_CO_04032023125953884722370171"
    }
  }, {
    "id": 74,
    "status": "complete",
    "bookedAtDate": "2023-03-04T07:00:00.254Z",
    "updatedDate": "2023-03-04T07:00:00.254Z",
    "user": {
      "id": 6,
      "name": "Dennis Alleso",
      "email": "ogembolevis97@gmail.com",
      "phoneNumber": "+254716527214",
      "isPhoneNumberConfirmed": false,
      "roles": "user",
      "password": "$2b$10$aGJoke.t7uLb.fKsqtkAe.AYpn7Qq12c/tBjMP6dpDXTsjS2HyDRO",
      "isEmailConfirmed": false,
      "isRegisteredWithGoogle": false,
      "avatarId": null,
      "currentHashedRefreshToken": "$2b$10$7gjJQDNY3RAd5U5nPw.pK.LTxe4dNn3GuAHqYUOIoIioDoY8yWIFe",
      "resetLink": ""
    },
    "tour": {
      "id": 3444,
      "name": "Coast",
      "startDate": "2023-03-24T21:00:00.000Z",
      "price": 4497,
      "summary": "Enjoy the Northern Lights in one of the best places in the world",
      "imageCover": "tour-9-cover.jpg",
      "difficulty": "easy",
      "createdAt": "2023-03-01T10:09:11.167Z",
      "etinerary": [
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "It's also important to note that the server-side code that receives the array should be able to handle it correctly. In some cases, you may need to adjust the server-side code to properly parse and handle the incoming array",
        "string3"
      ],
      "reviews": [],

    },
    "payment": {
      "id": 4,
      "amountPaid": 15000,
      "payingPhoneNumber": "254722370171",
      "transactionDate": "2023-03-04T07:00:00.174Z",
      "mpesaReceiptNumber": "RC41Z4HCWV",
      "merchantRequestID": "37397-40411400-1",
      "checkoutRequestID": "ws_CO_04032023125953884722370171"
    }
  }
]

export const normalizedTasks = [
  {
    id: "a1lgjfek",
    type: "backlog",
    priority: "Low Priority",
    user: "C. Guvert",
    description: "Company website redesign",
    avatar: "./3bc84a401a51991f895ac6f6f40b7010.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ], attach: "2",
    style: "card-color-low"
  },
  {
    id: "b2lgjfek",
    type: "backlog",
    priority: "Med Priority",
    user: "A. Nilson",
    description: "Mobile app login process prototype",
    avatar: "./615f6d8539dbe37bc2c8f3d7d749182c.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ], attach: "3",
    style: "card-color-med"
  },
  {
    id: "c3lgjfek",
    type: "backlog",
    priority: "High Priority",
    user: "M. Thompson",
    description: "Onboarding designs",
    avatar: "./41aad055f35eb28f42b84ca1b4cf5d53.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ], attach: "2",
    style: "card-color-high"
  },
  {
    id: "d4lgjfek",
    type: "progress",
    priority: "High Priority",
    user: "V. Cobain",
    description: "Research and strategy for upcoming projects",
    avatar: "./0cafaf103d2eef926eebb15b20651c88.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ], attach: "3",
    style: "card-color-high"
  },
  {
    id: "e5lgjfek",
    type: "review",
    priority: "Low Priority",
    user: "M. Thompson",
    description: "Dashboard layout design",
    avatar: "./41aad055f35eb28f42b84ca1b4cf5d53.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ], attach: "2",
    style: "card-color-low"
  },
  {
    id: "f6lgjfek",
    type: "complete",
    priority: "Low Priority",
    user: "A. Nilson",
    description: "Rewiew client spec document and give feedback",
    avatar: "./615f6d8539dbe37bc2c8f3d7d749182c.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ], attach: "3",
    style: "card-color-low"
  },
  {
    id: "f77gjfek",
    type: "progress",
    priority: "Med Priority",
    user: "C. Guvert",
    description: "Account profile flow diagrams",
    avatar: "./3bc84a401a51991f895ac6f6f40b7010.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ],
    attach: "2",
    style: "card-color-med"
  },
  {
    id: "f88gjfek",
    type: "progress",
    priority: "Low Priority",
    user: "A. Nilson",
    description: "Slide templates for client pitch project",
    avatar: "./615f6d8539dbe37bc2c8f3d7d749182c.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ],
    attach: "3",
    style: "card-color-low"
  },
  {
    id: "f99gjfek",
    type: "progress",
    priority: "Low Priority",
    user: "M. Thompson",
    description: "Review administrator console designs",
    avatar: "./41aad055f35eb28f42b84ca1b4cf5d53.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ],
    attach: "3",
    style: "card-color-low"
  },
  {
    id: "fuugjfek",
    type: "review",
    priority: "High Priority",
    user: "A. Nilson",
    description: "Social media posts",
    avatar: "./615f6d8539dbe37bc2c8f3d7d749182c.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ],
    attach: "2",
    style: "card-color-high"
  },
  {
    id: "d4lgj5ek",
    type: "review",
    priority: "Low Priority",
    user: "V. Cobain",
    description: "Shopping cart and product catalog wireframes",
    avatar: "./0cafaf103d2eef926eebb15b20651c88.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ], attach: "3",
    style: "card-color-low"
  },
  {
    id: "f77gjf6k",
    type: "review",
    priority: "Med Priority",
    user: "C. Guvert",
    description: "End user flow charts",
    avatar: "./3bc84a401a51991f895ac6f6f40b7010.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ],
    attach: "2",
    style: "card-color-med"
  },
  {
    id: "f9gjfek3",
    type: "complete",
    priority: "Med Priority",
    user: "M. Thompson",
    description: "Navigation designs",
    avatar: "./41aad055f35eb28f42b84ca1b4cf5d53.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ], attach: "3",
    style: "card-color-med"
  },
  {
    id: "f47gjf6k",
    type: "complete",
    priority: "Low Priority",
    user: "C. Guvert",
    description: "User profile prototypes",
    avatar: "./3bc84a401a51991f895ac6f6f40b7010.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ],
    attach: "2",
    style: "card-color-low"
  },
  {
    id: "d4lg23ek",
    type: "complete",
    priority: "High Priority",
    user: "V. Cobain",
    description: "Create style guide based on previous feedback",
    avatar: "./0cafaf103d2eef926eebb15b20651c88.jpg",
    comments: [
      {
        id: 1,
        comment: "this should be done by June",
        author: "Dennis"
      },
      {
        id: 2,
        comment: "Job well done",
        author: "Karuga"
      },
      {
        id: 3,
        comment: "Almost there forks",
        author: "Jabz"
      },
    ],
    attach: "3",
    style: "card-color-high"
  }
];