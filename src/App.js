import { useState } from "react";

const TRADES = [
  "Argon Welder (IBR)",
  "Argon Welder (Non-IBR)",
  "Pipe Fitter",
  "Pipe Foreman",
  "Pipe Fabricator",
  "Pipe Supervisor",
  "Structure Fitter",
  "Structure Welder",
  "Structure Fabricator",
  "Rigger",
  "Rigging Foreman",
  "Static Fitter",
  "Electrical Fitter",
  "Instrument Engineer",
  "Civil Engineer",
  "Mechanical Engineer",
  "Hydra Operator",
  "JLG Operator",
  "Crane Operator",
  "JCB Operator",
  "Supervisor",
  "Foreman",
  "Storekeeper",
  "Scaffolder",
  "Grinder Man",
  "Gas Cutter",
  "Helper",
  "Mason",
  "Steel Fixer",
  "Plumber",
  "Electrician",
  "Painter",
  "Solar Installation Technician",
];

const EXPERIENCE_LEVELS = [
  "Fresher (0-1 yr)",
  "Junior (1-3 yrs)",
  "Mid (3-6 yrs)",
  "Senior (6+ yrs)",
];

const LOCATIONS = [
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
  "Aurangabad",
  "Solapur",
  "Kolhapur",
  "Thane",
  "Navi Mumbai",
  "Amravati",
  "Delhi",
  "Noida",
  "Gurgaon",
  "Faridabad",
  "Ghaziabad",
  "Greater Noida",
  "Lucknow",
  "Kanpur",
  "Agra",
  "Varanasi",
  "Meerut",
  "Allahabad",
  "Bareilly",
  "Moradabad",
  "Aligarh",
  "Gorakhpur",
  "Ahmedabad",
  "Surat",
  "Vadodara",
  "Rajkot",
  "Bhavnagar",
  "Jamnagar",
  "Gandhinagar",
  "Anand",
  "Bharuch",
  "Mundra",
  "Jaipur",
  "Jodhpur",
  "Udaipur",
  "Kota",
  "Bikaner",
  "Ajmer",
  "Bhilwara",
  "Alwar",
  "Sikar",
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Tiruchirappalli",
  "Salem",
  "Tirunelveli",
  "Vellore",
  "Erode",
  "Thoothukudi",
  "Bengaluru",
  "Mysuru",
  "Hubballi",
  "Mangaluru",
  "Belagavi",
  "Davangere",
  "Ballari",
  "Vijayapura",
  "Hyderabad",
  "Warangal",
  "Nizamabad",
  "Karimnagar",
  "Khammam",
  "Secunderabad",
  "Sangareddy",
  "Visakhapatnam",
  "Vijayawada",
  "Guntur",
  "Nellore",
  "Kurnool",
  "Tirupati",
  "Kakinada",
  "Rajahmundry",
  "Kolkata",
  "Howrah",
  "Durgapur",
  "Asansol",
  "Siliguri",
  "Bardhaman",
  "Malda",
  "Kharagpur",
  "Ludhiana",
  "Amritsar",
  "Jalandhar",
  "Patiala",
  "Bathinda",
  "Mohali",
  "Pathankot",
  "Hoshiarpur",
  "Chandigarh",
  "Ambala",
  "Panipat",
  "Rohtak",
  "Hisar",
  "Karnal",
  "Sonipat",
  "Yamunanagar",
  "Palwal",
  "Bhopal",
  "Indore",
  "Jabalpur",
  "Gwalior",
  "Ujjain",
  "Sagar",
  "Rewa",
  "Satna",
  "Ratlam",
  "Patna",
  "Gaya",
  "Muzaffarpur",
  "Bhagalpur",
  "Purnia",
  "Darbhanga",
  "Ara",
  "Begusarai",
  "Bhubaneswar",
  "Cuttack",
  "Rourkela",
  "Berhampur",
  "Sambalpur",
  "Paradip",
  "Angul",
  "Jharsuguda",
  "Ranchi",
  "Jamshedpur",
  "Dhanbad",
  "Bokaro",
  "Deoghar",
  "Hazaribagh",
  "Ramgarh",
  "Giridih",
  "Raipur",
  "Bhilai",
  "Bilaspur",
  "Korba",
  "Durg",
  "Rajnandgaon",
  "Raigarh",
  "Jagdalpur",
  "Guwahati",
  "Silchar",
  "Dibrugarh",
  "Jorhat",
  "Nagaon",
  "Tezpur",
  "Tinsukia",
  "Kochi",
  "Thiruvananthapuram",
  "Kozhikode",
  "Thrissur",
  "Kollam",
  "Kannur",
  "Alappuzha",
  "Palakkad",
  "Shimla",
  "Manali",
  "Dharamshala",
  "Solan",
  "Baddi",
  "Nalagarh",
  "Mandi",
  "Kullu",
  "Dehradun",
  "Haridwar",
  "Rishikesh",
  "Roorkee",
  "Haldwani",
  "Kashipur",
  "Rudrapur",
  "Nainital",
  "Panaji",
  "Margao",
  "Vasco da Gama",
  "Mapusa",
  "Ponda",
  "Jammu",
  "Srinagar",
  "Udhampur",
  "Kathua",
  "Anantnag",
  "Leh",
  "Kargil",
  "Gangtok",
  "Namchi",
  "Shillong",
  "Tura",
  "Agartala",
  "Dharmanagar",
  "Imphal",
  "Thoubal",
  "Kohima",
  "Dimapur",
  "Itanagar",
  "Naharlagun",
  "Aizawl",
  "Lunglei",
  "Port Blair",
  "Puducherry",
  "Silvassa",
  "Daman",
  "Diu",
  "Kavaratti",
];

const WORKERS = [
  {
    id: 1,
    name: "Ramesh Kumar",
    trade: "Argon Welder (IBR)",
    experience: "Senior (6+ yrs)",
    location: "Mumbai",
    phone: "9876500001",
    ibr: true,
    available: true,
    photo: "RK",
  },
  {
    id: 2,
    name: "Suresh Yadav",
    trade: "Pipe Fitter",
    experience: "Mid (3-6 yrs)",
    location: "Pune",
    phone: "9765400002",
    ibr: false,
    available: true,
    photo: "SY",
  },
  {
    id: 3,
    name: "Ajay Singh",
    trade: "Structure Fitter",
    experience: "Senior (6+ yrs)",
    location: "Delhi",
    phone: "9654300003",
    ibr: false,
    available: true,
    photo: "AS",
  },
  {
    id: 4,
    name: "Mohan Das",
    trade: "Electrician",
    experience: "Mid (3-6 yrs)",
    location: "Chennai",
    phone: "9543200004",
    ibr: false,
    available: true,
    photo: "MD",
  },
  {
    id: 5,
    name: "Vikram Patel",
    trade: "Mason",
    experience: "Junior (1-3 yrs)",
    location: "Ahmedabad",
    phone: "9432100005",
    ibr: false,
    available: false,
    photo: "VP",
  },
  {
    id: 6,
    name: "Ravi Sharma",
    trade: "Rigger",
    experience: "Senior (6+ yrs)",
    location: "Mumbai",
    phone: "9321000006",
    ibr: false,
    available: true,
    photo: "RS",
  },
  {
    id: 7,
    name: "Kishore Mehta",
    trade: "Gas Cutter",
    experience: "Mid (3-6 yrs)",
    location: "Hyderabad",
    phone: "9210900007",
    ibr: false,
    available: true,
    photo: "KM",
  },
  {
    id: 8,
    name: "Prakash Nair",
    trade: "Civil Engineer",
    experience: "Senior (6+ yrs)",
    location: "Bengaluru",
    phone: "9109800008",
    ibr: false,
    available: true,
    photo: "PN",
  },
];

const C = {
  orange: "#FF6B2B",
  dark: "#1A1A2E",
  darker: "#0F0F1A",
  card: "#16213E",
  cardHover: "#1E2D50",
  yellow: "#FFD700",
  green: "#22C55E",
  red: "#EF4444",
  blue: "#3B82F6",
  purple: "#A855F7",
  text: "#E2E8F0",
  muted: "#94A3B8",
  border: "#2D3748",
};
const AV = [
  C.orange,
  C.blue,
  C.green,
  C.purple,
  C.red,
  "#F59E0B",
  "#06B6D4",
  "#EC4899",
];

function Avatar({ initials, size = 48, index = 0 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: AV[index % AV.length],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: size * 0.33,
        color: "#fff",
        flexShrink: 0,
        border: `2px solid ${C.border}`,
      }}
    >
      {initials}
    </div>
  );
}

function Badge({ text, color = C.orange }) {
  return (
    <span
      style={{
        background: color + "22",
        color,
        border: `1px solid ${color}44`,
        padding: "2px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
      }}
    >
      {text}
    </span>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  options,
  placeholder,
  maxLength,
}) {
  const s = {
    background: C.darker,
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    padding: "10px 14px",
    color: C.text,
    fontSize: 14,
    width: "100%",
    outline: "none",
    boxSizing: "border-box",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <label style={{ color: C.muted, fontSize: 12, fontWeight: 600 }}>
        {label}
      </label>
      {type === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...s, appearance: "none" }}
        >
          <option value="">-- Select --</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          maxLength={maxLength}
          style={s}
        />
      )}
    </div>
  );
}

function Btn({
  children,
  onClick,
  color = C.orange,
  outline = false,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? C.border : outline ? "transparent" : color,
        color: outline ? color : "#fff",
        border: `2px solid ${disabled ? C.border : color}`,
        borderRadius: 10,
        padding: "12px 0",
        fontWeight: 700,
        fontSize: 14,
        cursor: disabled ? "not-allowed" : "pointer",
        width: "100%",
      }}
    >
      {children}
    </button>
  );
}

function Row({ label, value, bold = false }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 7,
      }}
    >
      <span style={{ color: C.muted, fontSize: 13 }}>{label}</span>
      <span
        style={{ color: C.text, fontWeight: bold ? 700 : 500, fontSize: 13 }}
      >
        {value}
      </span>
    </div>
  );
}

function Header({ icon, title, subtitle, onBack }) {
  return (
    <div
      style={{
        background: C.card,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderBottom: `1px solid ${C.border}`,
        position: "sticky",
        top: 56,
        zIndex: 40,
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            color: C.muted,
            cursor: "pointer",
            fontSize: 22,
            padding: 0,
          }}
        >
          ←
        </button>
      )}
      <div>
        <div
          style={{
            color: C.orange,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </div>
        <div style={{ color: C.text, fontWeight: 700, fontSize: 16 }}>
          {icon} {title}
        </div>
      </div>
    </div>
  );
}

function PaymentGateway({ amount, planLabel, userName, onSuccess, onBack }) {
  const [method, setMethod] = useState(null);
  const [upiId, setUpiId] = useState("");
  const [upiApp, setUpiApp] = useState(null);
  const [card, setCard] = useState({ num: "", name: "", expiry: "", cvv: "" });
  const [bank, setBank] = useState("");
  const [wallet, setWallet] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [receipt, setReceipt] = useState(null);

  const txnId = "WH" + Date.now().toString().slice(-10);
  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const expire = new Date(
    Date.now() + 30 * 24 * 3600 * 1000
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  function fmtCard(v) {
    return v
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }
  function fmtExpiry(v) {
    let d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
  }

  function startPay() {
    setProcessing(true);
    let p = 0;
    const iv = setInterval(() => {
      p += 4;
      setProgress(p);
      if (p >= 100) {
        clearInterval(iv);
        finish();
      }
    }, 100);
  }

  function finish() {
    setProcessing(false);
    setReceipt({
      txnId,
      amount,
      planLabel,
      userName,
      date: today,
      expire,
      method:
        method === "upi"
          ? upiApp
            ? upiApp + " UPI"
            : "UPI (" + upiId + ")"
          : method === "card"
          ? "Card ****" + card.num.replace(/\s/g, "").slice(-4)
          : method === "netbank"
          ? "Net Banking – " + bank
          : wallet + " Wallet",
    });
  }

  const canPay =
    method &&
    ((method === "upi" && (upiId || upiApp)) ||
      (method === "card" && card.num && card.name && card.expiry && card.cvv) ||
      (method === "netbank" && bank) ||
      (method === "wallet" && wallet));

  if (receipt)
    return (
      <div style={{ padding: 20 }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 64, marginBottom: 8 }}>✅</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.green }}>
            Payment Successful!
          </div>
          <div style={{ color: C.muted, fontSize: 13, marginTop: 4 }}>
            Aapka plan activate ho gaya hai
          </div>
        </div>
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.green}44`,
            borderRadius: 16,
            overflow: "hidden",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              background: C.green + "22",
              padding: 16,
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <div style={{ color: C.green, fontWeight: 700, fontSize: 15 }}>
              🧾 Payment Receipt
            </div>
            <div style={{ color: C.muted, fontSize: 11 }}>
              WeHire Construction Platform
            </div>
          </div>
          <div style={{ padding: 16 }}>
            <Row label="Transaction ID" value={receipt.txnId} />
            <Row label="Date" value={receipt.date} />
            <Row label="Plan" value={receipt.planLabel} />
            <Row label="Customer" value={receipt.userName} />
            <Row label="Payment Via" value={receipt.method} />
            <div
              style={{
                borderTop: `1px solid ${C.border}`,
                marginTop: 10,
                paddingTop: 10,
              }}
            >
              <Row label="Amount Paid" value={"₹" + receipt.amount} bold />
            </div>
            <div
              style={{
                marginTop: 12,
                background: C.green + "11",
                borderRadius: 8,
                padding: 10,
              }}
            >
              <div style={{ color: C.green, fontWeight: 600, fontSize: 12 }}>
                📅 Valid Till
              </div>
              <div
                style={{
                  color: C.text,
                  fontWeight: 700,
                  fontSize: 15,
                  marginTop: 2,
                }}
              >
                {receipt.expire}
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              border: `2px dashed ${C.green}`,
              borderRadius: 12,
              padding: "10px 20px",
            }}
          >
            <span style={{ fontSize: 28 }}>🏗️</span>
            <div>
              <div style={{ color: C.green, fontWeight: 700, fontSize: 13 }}>
                WeHire Verified
              </div>
              <div style={{ color: C.muted, fontSize: 11 }}>
                Txn: {receipt.txnId}
              </div>
            </div>
          </div>
        </div>
        <Btn onClick={onSuccess} color={C.green}>
          Continue to Platform →
        </Btn>
      </div>
    );

  if (processing)
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>⏳</div>
        <div
          style={{
            color: C.text,
            fontWeight: 700,
            fontSize: 18,
            marginBottom: 8,
          }}
        >
          Payment Processing…
        </div>
        <div style={{ color: C.muted, fontSize: 13, marginBottom: 28 }}>
          Kripya wait karein
        </div>
        <div
          style={{
            background: C.border,
            borderRadius: 99,
            height: 8,
            overflow: "hidden",
            maxWidth: 280,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background: C.green,
              height: "100%",
              width: progress + "%",
              transition: "width 0.1s",
              borderRadius: 99,
            }}
          />
        </div>
        <div style={{ color: C.muted, fontSize: 12, marginTop: 10 }}>
          🔒 256-bit SSL Encrypted
        </div>
      </div>
    );

  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: 16,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            color: C.muted,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            marginBottom: 10,
            textTransform: "uppercase",
          }}
        >
          Order Summary
        </div>
        <Row label={planLabel} value={"₹" + amount} />
        <div
          style={{
            borderTop: `1px solid ${C.border}`,
            paddingTop: 8,
            marginTop: 4,
          }}
        >
          <Row label="Total" value={"₹" + amount} bold />
        </div>
      </div>

      <div
        style={{
          color: C.text,
          fontWeight: 700,
          fontSize: 15,
          marginBottom: 14,
        }}
      >
        Payment Method Chunein
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 20,
        }}
      >
        {[
          {
            id: "upi",
            icon: "📱",
            label: "UPI",
            sub: "GPay · PhonePe · Paytm · BHIM",
          },
          {
            id: "card",
            icon: "💳",
            label: "Debit/Credit Card",
            sub: "Visa · Mastercard · RuPay",
          },
          {
            id: "netbank",
            icon: "🏦",
            label: "Net Banking",
            sub: "SBI · HDFC · ICICI · 50+ banks",
          },
          {
            id: "wallet",
            icon: "👛",
            label: "Mobile Wallet",
            sub: "Paytm · Amazon Pay · Mobikwik",
          },
        ].map((m) => (
          <div
            key={m.id}
            onClick={() => setMethod(m.id)}
            style={{
              background: method === m.id ? C.orange + "22" : C.card,
              border: `2px solid ${method === m.id ? C.orange : C.border}`,
              borderRadius: 12,
              padding: "14px 16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <span style={{ fontSize: 26 }}>{m.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>
                {m.label}
              </div>
              <div style={{ color: C.muted, fontSize: 11 }}>{m.sub}</div>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: `2px solid ${method === m.id ? C.orange : C.muted}`,
                background: method === m.id ? C.orange : "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {method === m.id && (
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#fff",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {method === "upi" && (
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 18,
            marginBottom: 16,
          }}
        >
          <div style={{ color: C.text, fontWeight: 700, marginBottom: 12 }}>
            📱 UPI Payment
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 8,
              marginBottom: 16,
            }}
          >
            {[
              { id: "GPay", icon: "🟢" },
              { id: "PhonePe", icon: "🟣" },
              { id: "Paytm", icon: "🔵" },
              { id: "BHIM", icon: "🟠" },
            ].map((a) => (
              <div
                key={a.id}
                onClick={() => setUpiApp(a.id)}
                style={{
                  background: upiApp === a.id ? C.orange + "22" : C.darker,
                  border: `2px solid ${upiApp === a.id ? C.orange : C.border}`,
                  borderRadius: 10,
                  padding: "10px 4px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 22 }}>{a.icon}</div>
                <div
                  style={{
                    color: C.text,
                    fontSize: 10,
                    fontWeight: 600,
                    marginTop: 3,
                  }}
                >
                  {a.id}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              background: C.green + "11",
              border: `1px solid ${C.green}44`,
              borderRadius: 10,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <div style={{ color: C.muted, fontSize: 11, marginBottom: 2 }}>
              💰 Pay to (WeHire Official)
            </div>
            <div style={{ color: C.green, fontWeight: 700, fontSize: 14 }}>
              vikramkatariya912@okhdfcbank
            </div>
            <div style={{ color: C.muted, fontSize: 10, marginTop: 2 }}>
              HDFC Bank · Vikram Katariya
            </div>
          </div>
          <input
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Ya apna UPI ID enter karein"
            style={{
              background: C.darker,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "10px 14px",
              color: C.text,
              fontSize: 14,
              width: "100%",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>
      )}

      {method === "card" && (
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 18,
            marginBottom: 16,
          }}
        >
          <div style={{ color: C.text, fontWeight: 700, marginBottom: 14 }}>
            💳 Card Details
          </div>
          <div
            style={{
              background: `linear-gradient(135deg,${C.orange},${C.purple})`,
              borderRadius: 14,
              padding: 20,
              marginBottom: 16,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.7)",
                letterSpacing: 2,
                marginBottom: 14,
              }}
            >
              WEHIRE PAY
            </div>
            <div
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: 3,
                marginBottom: 14,
                fontFamily: "monospace",
              }}
            >
              {card.num || "•••• •••• •••• ••••"}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>
                  CARD HOLDER
                </div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: 12 }}>
                  {card.name || "YOUR NAME"}
                </div>
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>
                  EXPIRES
                </div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: 12 }}>
                  {card.expiry || "MM/YY"}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Field
              label="Card Number"
              value={card.num}
              onChange={(v) => setCard((c) => ({ ...c, num: fmtCard(v) }))}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
            <Field
              label="Name on Card"
              value={card.name}
              onChange={(v) =>
                setCard((c) => ({ ...c, name: v.toUpperCase() }))
              }
              placeholder="AS ON CARD"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <Field
                label="Expiry"
                value={card.expiry}
                onChange={(v) =>
                  setCard((c) => ({ ...c, expiry: fmtExpiry(v) }))
                }
                placeholder="MM/YY"
                maxLength={5}
              />
              <Field
                label="CVV"
                type="password"
                value={card.cvv}
                onChange={(v) =>
                  setCard((c) => ({
                    ...c,
                    cvv: v.replace(/\D/g, "").slice(0, 3),
                  }))
                }
                placeholder="•••"
                maxLength={3}
              />
            </div>
          </div>
        </div>
      )}

      {method === "netbank" && (
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 18,
            marginBottom: 16,
          }}
        >
          <div style={{ color: C.text, fontWeight: 700, marginBottom: 12 }}>
            🏦 Bank Chunein
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 12,
            }}
          >
            {[
              "SBI",
              "HDFC",
              "ICICI",
              "Axis",
              "Kotak",
              "PNB",
              "BOB",
              "Canara",
            ].map((b) => (
              <div
                key={b}
                onClick={() => setBank(b)}
                style={{
                  background: bank === b ? C.blue + "22" : C.darker,
                  border: `2px solid ${bank === b ? C.blue : C.border}`,
                  borderRadius: 10,
                  padding: "10px 12px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: bank === b ? C.blue : C.text,
                    fontWeight: 700,
                  }}
                >
                  {b}
                </div>
              </div>
            ))}
          </div>
          <Field
            label="Other Bank"
            type="select"
            value={bank.length > 4 ? bank : ""}
            onChange={setBank}
            options={[
              "Yes Bank",
              "IDFC First",
              "IndusInd",
              "Federal Bank",
              "UCO Bank",
              "IOB",
              "Syndicate",
            ]}
          />
        </div>
      )}

      {method === "wallet" && (
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 18,
            marginBottom: 16,
          }}
        >
          <div style={{ color: C.text, fontWeight: 700, marginBottom: 12 }}>
            👛 Wallet Chunein
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 8,
            }}
          >
            {[
              { id: "Paytm", icon: "💙" },
              { id: "Amazon Pay", icon: "🟡" },
              { id: "Mobikwik", icon: "🟢" },
              { id: "Freecharge", icon: "🔴" },
              { id: "JioMoney", icon: "🔵" },
              { id: "Ola Money", icon: "🖤" },
            ].map((w) => (
              <div
                key={w.id}
                onClick={() => setWallet(w.id)}
                style={{
                  background: wallet === w.id ? C.purple + "22" : C.darker,
                  border: `2px solid ${wallet === w.id ? C.purple : C.border}`,
                  borderRadius: 10,
                  padding: "12px 6px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 22 }}>{w.icon}</div>
                <div
                  style={{
                    color: wallet === w.id ? C.purple : C.text,
                    fontSize: 10,
                    fontWeight: 600,
                    marginTop: 4,
                  }}
                >
                  {w.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Btn onClick={startPay} disabled={!canPay} color={C.green}>
          🔒 Pay ₹{amount} Securely
        </Btn>
        <Btn onClick={onBack} outline color={C.muted}>
          ← Back
        </Btn>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          marginTop: 16,
          flexWrap: "wrap",
        }}
      >
        {[
          "🔒 SSL Secure",
          "✅ RBI Approved",
          "🛡️ PCI-DSS",
          "↩️ Refund Policy",
        ].map((t) => (
          <span key={t} style={{ color: C.muted, fontSize: 10 }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkerRegScreen({ onBack, onSuccess }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    trade: "",
    experience: "",
    location: "",
    workLocation: "",
    ibr: false,
  });
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div>
      <Header
        icon="👷"
        title="Worker Registration"
        subtitle="Apna Profile Banao"
        onBack={onBack}
      />
      <div
        style={{
          display: "flex",
          padding: "14px 20px",
          gap: 8,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {["Profile", "Plan", "Payment"].map((s, i) => (
          <div
            key={s}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                background:
                  step > i + 1 ? C.green : step === i + 1 ? C.orange : C.border,
                color: "#fff",
              }}
            >
              {step > i + 1 ? "✓" : i + 1}
            </div>
            <div
              style={{
                color: step === i + 1 ? C.orange : C.muted,
                fontSize: 10,
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "16px 20px 28px" }}>
        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Field
              label="Full Name"
              value={form.name}
              onChange={set("name")}
              placeholder="Poora naam"
            />
            <Field
              label="Mobile Number"
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="10-digit number"
              maxLength={10}
            />
            <Field
              label="Trade / Skill"
              type="select"
              value={form.trade}
              onChange={set("trade")}
              options={TRADES}
            />
            <Field
              label="Experience"
              type="select"
              value={form.experience}
              onChange={set("experience")}
              options={EXPERIENCE_LEVELS}
            />
            <Field
              label="Aap Kahan Rehte Hain"
              type="select"
              value={form.location}
              onChange={set("location")}
              options={LOCATIONS}
            />
            <Field
              label="Kahan Kaam Karna Chahte Hain"
              type="select"
              value={form.workLocation}
              onChange={set("workLocation")}
              options={LOCATIONS}
            />
            {(form.trade === "Argon Welder (IBR)" ||
              form.trade === "Argon Welder (Non-IBR)") && (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <input
                  type="checkbox"
                  id="ibr"
                  checked={form.ibr}
                  onChange={(e) => set("ibr")(e.target.checked)}
                  style={{ width: 16, height: 16 }}
                />
                <label htmlFor="ibr" style={{ color: C.text, fontSize: 14 }}>
                  IBR Certified Welder hoon
                </label>
              </div>
            )}
            <Btn
              onClick={() => setStep(2)}
              disabled={!form.name || !form.phone || !form.trade}
            >
              Next →
            </Btn>
          </div>
        )}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                background: C.card,
                border: `2px solid ${C.green}`,
                borderRadius: 16,
                padding: 22,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      color: C.muted,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    WORKER MONTHLY PLAN
                  </div>
                  <div
                    style={{ fontSize: 42, fontWeight: 900, color: C.green }}
                  >
                    ₹99
                  </div>
                  <div style={{ color: C.muted, fontSize: 12 }}>per month</div>
                </div>
                <div style={{ fontSize: 44 }}>👷</div>
              </div>
              {[
                "Profile India bhar ke contractors ko dikhega",
                "Direct contact request receive karo",
                "IBR/Non-IBR badge profile par",
                "Available/Busy status update karo",
                "24/7 platform access",
              ].map((f, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 8, marginBottom: 8 }}
                >
                  <span style={{ color: C.green }}>✓</span>
                  <span style={{ color: C.text, fontSize: 13 }}>{f}</span>
                </div>
              ))}
            </div>
            <Btn onClick={() => setStep(3)} color={C.green}>
              ₹99/month Plan Chunein →
            </Btn>
            <Btn onClick={() => setStep(1)} outline color={C.muted}>
              ← Back
            </Btn>
          </div>
        )}
        {step === 3 && (
          <PaymentGateway
            amount={99}
            planLabel="Worker Monthly Plan"
            userName={form.name}
            onSuccess={onSuccess}
            onBack={() => setStep(2)}
          />
        )}
      </div>
    </div>
  );
}

function ContractorRegScreen({ onBack, onSuccess }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    location: "",
    type: "",
  });
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div>
      <Header
        icon="🏢"
        title="Contractor Registration"
        subtitle="Hire Workers Now"
        onBack={onBack}
      />
      <div
        style={{
          display: "flex",
          padding: "14px 20px",
          gap: 8,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        {["Details", "Plan", "Payment"].map((s, i) => (
          <div
            key={s}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                background:
                  step > i + 1 ? C.green : step === i + 1 ? C.orange : C.border,
                color: "#fff",
              }}
            >
              {step > i + 1 ? "✓" : i + 1}
            </div>
            <div
              style={{
                color: step === i + 1 ? C.orange : C.muted,
                fontSize: 10,
                fontWeight: 600,
              }}
            >
              {s}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "16px 20px 28px" }}>
        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Field
              label="Your Name"
              value={form.name}
              onChange={set("name")}
              placeholder="Contact person naam"
            />
            <Field
              label="Company / Firm Name"
              value={form.company}
              onChange={set("company")}
              placeholder="Company naam"
            />
            <Field
              label="Mobile Number"
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="10-digit number"
              maxLength={10}
            />
            <Field
              label="City"
              type="select"
              value={form.location}
              onChange={set("location")}
              options={LOCATIONS}
            />
            <Field
              label="Company Type"
              type="select"
              value={form.type}
              onChange={set("type")}
              options={[
                "Construction Company",
                "EPC Contractor",
                "Petrochemical",
                "Shipyard",
                "Infrastructure",
                "Real Estate",
                "Other",
              ]}
            />
            <Btn
              onClick={() => setStep(2)}
              disabled={!form.name || !form.company || !form.phone}
            >
              Next →
            </Btn>
          </div>
        )}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                background: C.card,
                border: `2px solid ${C.orange}`,
                borderRadius: 16,
                padding: 22,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <div>
                  <div
                    style={{
                      color: C.muted,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 1,
                    }}
                  >
                    CONTRACTOR MONTHLY PLAN
                  </div>
                  <div
                    style={{ fontSize: 42, fontWeight: 900, color: C.orange }}
                  >
                    ₹999
                  </div>
                  <div style={{ color: C.muted, fontSize: 12 }}>per month</div>
                </div>
                <div style={{ fontSize: 44 }}>🏢</div>
              </div>
              {[
                "Unlimited workers hire karo",
                "34+ trade categories",
                "IBR certified filter",
                "Direct contact number",
                "City/state wise search",
                "Dedicated dashboard",
              ].map((f, i) => (
                <div
                  key={i}
                  style={{ display: "flex", gap: 8, marginBottom: 8 }}
                >
                  <span style={{ color: C.orange }}>✓</span>
                  <span style={{ color: C.text, fontSize: 13 }}>{f}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                background: C.green + "11",
                border: `1px solid ${C.green}33`,
                borderRadius: 10,
                padding: 12,
              }}
            >
              <div style={{ color: C.green, fontSize: 13, fontWeight: 600 }}>
                💡 Value
              </div>
              <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>
                Agency ₹5k–₹15k per hire leti hai. Yahan unlimited sirf
                ₹999/month!
              </div>
            </div>
            <Btn onClick={() => setStep(3)}>₹999/month Plan Chunein →</Btn>
            <Btn onClick={() => setStep(1)} outline color={C.muted}>
              ← Back
            </Btn>
          </div>
        )}
        {step === 3 && (
          <PaymentGateway
            amount={999}
            planLabel="Contractor Monthly Plan"
            userName={form.company || form.name}
            onSuccess={onSuccess}
            onBack={() => setStep(2)}
          />
        )}
      </div>
    </div>
  );
}

function WorkersScreen({ onBack }) {
  const [search, setSearch] = useState("");
  const [ft, setFt] = useState("");
  const [fl, setFl] = useState("");
  const [contact, setContact] = useState(null);

  const list = WORKERS.filter(
    (w) =>
      (!ft || w.trade === ft) &&
      (!fl || w.location === fl) &&
      (!search ||
        w.name.toLowerCase().includes(search.toLowerCase()) ||
        w.trade.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <Header
        icon="🔍"
        title="Workers Dhundho"
        subtitle="Worker Directory"
        onBack={onBack}
      />
      <div
        style={{
          padding: "14px 20px",
          background: C.darker,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Naam ya trade..."
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            padding: "10px 14px",
            color: C.text,
            fontSize: 14,
            width: "100%",
            boxSizing: "border-box",
            outline: "none",
            marginBottom: 10,
          }}
        />
        <div style={{ display: "flex", gap: 10 }}>
          <select
            value={ft}
            onChange={(e) => setFt(e.target.value)}
            style={{
              flex: 1,
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "8px 10px",
              color: C.text,
              fontSize: 12,
            }}
          >
            <option value="">All Trades</option>
            {TRADES.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <select
            value={fl}
            onChange={(e) => setFl(e.target.value)}
            style={{
              flex: 1,
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 8,
              padding: "8px 10px",
              color: C.text,
              fontSize: 12,
            }}
          >
            <option value="">All Cities</option>
            {LOCATIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        style={{
          padding: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
          gap: 14,
        }}
      >
        {list.length === 0 ? (
          <div
            style={{
              color: C.muted,
              padding: 40,
              textAlign: "center",
              gridColumn: "1/-1",
            }}
          >
            Koi worker nahi mila.
          </div>
        ) : (
          list.map((w, i) => (
            <div
              key={w.id}
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: 18,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Avatar initials={w.photo} size={48} index={i} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>
                    {w.name}
                  </div>
                  <div
                    style={{ color: C.orange, fontSize: 13, fontWeight: 600 }}
                  >
                    {w.trade}
                  </div>
                </div>
                <Badge
                  text={w.available ? "Available" : "Busy"}
                  color={w.available ? C.green : C.red}
                />
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Badge text={w.experience} color={C.blue} />
                <Badge text={"📍 " + w.location} color={C.muted} />
                {w.ibr && <Badge text="IBR Certified" color={C.yellow} />}
              </div>
              <button
                onClick={() => setContact(w)}
                style={{
                  background: C.orange,
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "9px 0",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                Contact Worker
              </button>
            </div>
          ))
        )}
      </div>
      {contact && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#000a",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            zIndex: 100,
          }}
          onClick={() => setContact(null)}
        >
          <div
            style={{
              background: C.card,
              borderRadius: "20px 20px 0 0",
              padding: 28,
              width: "100%",
              maxWidth: 480,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                gap: 14,
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <Avatar initials={contact.photo} size={52} index={0} />
              <div>
                <div style={{ fontWeight: 700, color: C.text, fontSize: 18 }}>
                  {contact.name}
                </div>
                <div style={{ color: C.orange }}>
                  {contact.trade} · {contact.location}
                </div>
              </div>
            </div>
            <div
              style={{
                background: C.green + "11",
                border: `1px solid ${C.green}33`,
                borderRadius: 10,
                padding: 14,
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 28 }}>📞</span>
              <div>
                <div style={{ color: C.muted, fontSize: 11 }}>
                  Mobile Number
                </div>
                <div style={{ color: C.green, fontWeight: 700, fontSize: 20 }}>
                  {contact.phone}
                </div>
              </div>
            </div>
            <Btn onClick={() => setContact(null)} outline color={C.muted}>
              Close
            </Btn>
          </div>
        </div>
      )}
    </div>
  );
}

function DashboardScreen({ isContractor, onNav }) {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(135deg,${C.darker},#1a1a3e)`,
          padding: "22px 20px",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ color: C.muted, fontSize: 12 }}>Welcome back 👋</div>
        <div style={{ color: C.text, fontSize: 20, fontWeight: 800 }}>
          {isContractor ? "ABC Constructions" : "Ramesh Kumar"}
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <Badge
            text={isContractor ? "Contractor Plan" : "Worker Plan"}
            color={isContractor ? C.orange : C.green}
          />
          <Badge text="Active ✓" color={C.green} />
        </div>
      </div>
      <div style={{ padding: 20 }}>
        {isContractor ? (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginBottom: 20,
              }}
            >
              {[
                { l: "Workers Viewed", v: "34", i: "👁️" },
                { l: "Contacts", v: "12", i: "📞" },
                { l: "Hired", v: "6", i: "✅" },
                { l: "Days Active", v: "18", i: "📅" },
              ].map((s) => (
                <div
                  key={s.l}
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 12,
                    padding: 16,
                  }}
                >
                  <div style={{ fontSize: 24 }}>{s.i}</div>
                  <div
                    style={{ fontSize: 28, fontWeight: 800, color: C.orange }}
                  >
                    {s.v}
                  </div>
                  <div style={{ color: C.muted, fontSize: 12 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <Btn onClick={() => onNav("workers")}>🔍 Workers Dhundho</Btn>
          </div>
        ) : (
          <div>
            <div
              style={{
                background: C.card,
                border: `1px solid ${C.green}44`,
                borderRadius: 14,
                padding: 18,
                marginBottom: 20,
              }}
            >
              <div style={{ color: C.muted, fontSize: 12, marginBottom: 10 }}>
                Your Profile
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <Avatar initials="RK" size={52} index={0} />
                <div>
                  <div style={{ color: C.text, fontWeight: 700 }}>
                    Ramesh Kumar
                  </div>
                  <div style={{ color: C.orange, fontSize: 13 }}>
                    Argon Welder (IBR)
                  </div>
                  <div style={{ color: C.muted, fontSize: 12 }}>
                    Mumbai · Senior (6+ yrs)
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginBottom: 20,
              }}
            >
              {[
                { l: "Profile Views", v: "128", i: "👁️" },
                { l: "Contact Requests", v: "8", i: "📞" },
              ].map((s) => (
                <div
                  key={s.l}
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    borderRadius: 12,
                    padding: 16,
                  }}
                >
                  <div style={{ fontSize: 24 }}>{s.i}</div>
                  <div
                    style={{ fontSize: 28, fontWeight: 800, color: C.green }}
                  >
                    {s.v}
                  </div>
                  <div style={{ color: C.muted, fontSize: 12 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 18,
          }}
        >
          <div style={{ color: C.text, fontWeight: 700, marginBottom: 12 }}>
            Subscription
          </div>
          <Row label="Plan" value={isContractor ? "₹999/month" : "₹99/month"} />
          <Row label="Next Renewal" value="23 July 2026" />
          <div style={{ marginTop: 12 }}>
            <Btn outline color={C.orange}>
              Renew Subscription
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicyScreen({ onBack, title, icon, color, items }) {
  return (
    <div>
      <Header
        icon={icon}
        title={title}
        subtitle="WeHire Platform"
        onBack={onBack}
      />
      <div style={{ padding: 20 }}>
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 14,
            padding: 20,
            marginBottom: 16,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                marginBottom: 14,
                paddingBottom: 14,
                borderBottom:
                  i < items.length - 1 ? `1px solid ${C.border}` : "none",
              }}
            >
              <div
                style={{
                  color: C.text,
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 4,
                }}
              >
                {item.t}
              </div>
              <div style={{ color: C.muted, fontSize: 12, lineHeight: 1.6 }}>
                {item.d}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: color + "11",
            border: `1px solid ${color}33`,
            borderRadius: 10,
            padding: 12,
          }}
        >
          <div style={{ color, fontSize: 12, fontWeight: 600 }}>
            Last Updated: June 2026
          </div>
          <div style={{ color: C.muted, fontSize: 11, marginTop: 4 }}>
            Contact: support@wehire.in
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeScreen({ onNav }) {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(135deg,${C.darker} 0%,#1a1a3e 100%)`,
          padding: "44px 24px 36px",
          textAlign: "center",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: C.orange + "22",
            border: `1px solid ${C.orange}44`,
            borderRadius: 20,
            padding: "4px 14px",
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 13 }}>🏗️</span>
          <span
            style={{
              color: C.orange,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            CONSTRUCTION HIRING PLATFORM
          </span>
        </div>
        <h1
          style={{
            fontSize: "clamp(26px,6vw,44px)",
            fontWeight: 900,
            color: C.text,
            lineHeight: 1.1,
            margin: "0 0 10px",
          }}
        >
          Hire Skilled Labour
          <br />
          <span style={{ color: C.orange }}>Kaam Karo, Badho</span>
        </h1>
        <p
          style={{
            color: C.muted,
            fontSize: 14,
            margin: "0 auto 24px",
            maxWidth: 360,
          }}
        >
          India ka #1 platform — contractors directly skilled construction
          workers ko hire kar sakte hain
        </p>
        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => onNav("worker-reg")}
            style={{
              background: C.orange,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            👷 Worker Registration
          </button>
          <button
            onClick={() => onNav("contractor-reg")}
            style={{
              background: "transparent",
              color: C.orange,
              border: `2px solid ${C.orange}`,
              borderRadius: 10,
              padding: "12px 22px",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            🏢 Contractor / Company
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 1, background: C.border }}>
        {[
          { l: "Workers", v: "12,000+" },
          { l: "Contractors", v: "1,800+" },
          { l: "Jobs Filled", v: "45,000+" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: C.card,
              padding: "16px 10px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, color: C.orange }}>
              {s.v}
            </div>
            <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "24px 20px" }}>
        <h2
          style={{
            color: C.text,
            fontSize: 17,
            fontWeight: 700,
            margin: "0 0 12px",
          }}
        >
          Available Trades
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))",
            gap: 10,
          }}
        >
          {TRADES.map((t, i) => (
            <div
              key={t}
              onClick={() => onNav("workers")}
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "12px 8px",
                textAlign: "center",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = C.orange;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div style={{ fontSize: 20, marginBottom: 4 }}>
                {
                  [
                    "⚙️",
                    "🔧",
                    "🛠️",
                    "🏗️",
                    "⛏️",
                    "👷",
                    "🔩",
                    "🔨",
                    "🔥",
                    "👨‍💼",
                    "👨‍🔬",
                    "🧱",
                    "🏠",
                    "⚡",
                    "🪝",
                    "🎨",
                    "🏗️",
                    "📋",
                  ][i % 18]
                }
              </div>
              <div
                style={{
                  color: C.text,
                  fontSize: 11,
                  fontWeight: 600,
                  lineHeight: 1.3,
                }}
              >
                {t}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        <h2
          style={{
            color: C.text,
            fontSize: 17,
            fontWeight: 700,
            margin: "0 0 12px",
          }}
        >
          Pricing
        </h2>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: 130,
              background: C.card,
              border: `1px solid ${C.green}44`,
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div
              style={{
                color: C.muted,
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              👷 Worker
            </div>
            <div style={{ fontSize: 30, fontWeight: 900, color: C.green }}>
              ₹99
            </div>
            <div style={{ color: C.muted, fontSize: 11 }}>per month</div>
            <div style={{ color: C.text, fontSize: 12, marginTop: 8 }}>
              Profile contractors ko dikhega
            </div>
          </div>
          <div
            style={{
              flex: 1,
              minWidth: 130,
              background: C.card,
              border: `1px solid ${C.orange}44`,
              borderRadius: 14,
              padding: 16,
            }}
          >
            <div
              style={{
                color: C.muted,
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 4,
              }}
            >
              🏢 Contractor
            </div>
            <div style={{ fontSize: 30, fontWeight: 900, color: C.orange }}>
              ₹999
            </div>
            <div style={{ color: C.muted, fontSize: 11 }}>per month</div>
            <div style={{ color: C.text, fontSize: 12, marginTop: 8 }}>
              Unlimited workers hire karo
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "16px 20px 28px",
          textAlign: "center",
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div style={{ color: C.muted, fontSize: 11, marginBottom: 10 }}>
          WeHire © 2026 · All Rights Reserved
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <span
            onClick={() => onNav("disclaimer")}
            style={{
              color: C.orange,
              fontSize: 12,
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Disclaimer
          </span>
          <span
            onClick={() => onNav("privacy")}
            style={{
              color: C.orange,
              fontSize: 12,
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </span>
          <span
            onClick={() => onNav("terms")}
            style={{
              color: C.orange,
              fontSize: 12,
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Terms of Use
          </span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [isContr, setIsContr] = useState(false);

  const nav = (s, c = false) => {
    setScreen(s);
    if (c !== false) setIsContr(c);
  };

  const disclaimerItems = [
    {
      t: "Platform Role",
      d: "WeHire ek online platform hai jo workers aur contractors ko connect karta hai. Hum kisi bhi employment guarantee nahi dete.",
    },
    {
      t: "Worker Verification",
      d: "WeHire workers ki skills ya certificates ki poori guarantee nahi leta. Contractors apni responsibility par hire karein.",
    },
    {
      t: "Payment",
      d: "Subscription fee sirf platform use ke liye hai. Job salary worker aur contractor ke beech decide hoti hai.",
    },
    {
      t: "Disputes",
      d: "Workers aur contractors ke beech kisi bhi vivad mein WeHire zimmedar nahi hoga.",
    },
    {
      t: "IBR Certification",
      d: "IBR certificates verify karna contractor ki jimmedari hai.",
    },
    {
      t: "Accuracy",
      d: "Profile information worker khud deta hai. WeHire uski accuracy guarantee nahi deta.",
    },
  ];
  const privacyItems = [
    {
      t: "Data Collection",
      d: "Hum aapka naam, phone number, trade, aur location collect karte hain sirf platform ke liye.",
    },
    {
      t: "Data Usage",
      d: "Aapki information sirf workers/contractors connect karne ke liye use hoti hai. Third party ko nahi bechte.",
    },
    {
      t: "Phone Number",
      d: "Aapka number sirf subscription ke baad relevant parties ko dikhega.",
    },
    {
      t: "Payment Data",
      d: "Payment securely process hoti hai. Card details store nahi karte.",
    },
    {
      t: "Data Deletion",
      d: "Kabhi bhi account delete karwa sakte hain. Email: support@wehire.in",
    },
    { t: "Security", d: "Aapka data SSL encryption se protect hai." },
  ];
  const termsItems = [
    {
      t: "Acceptance",
      d: "WeHire use karne par aap in terms ko accept karte hain.",
    },
    { t: "Eligibility", d: "Platform use ke liye umar 18+ honi chahiye." },
    {
      t: "Subscription",
      d: "Worker ₹99/month, Contractor ₹999/month. Auto-renew nahi hoga.",
    },
    {
      t: "Refund Policy",
      d: "Payment ke 24 ghante ke andar refund request ki ja sakti hai.",
    },
    {
      t: "Prohibited Use",
      d: "False information, spam, ya illegal activities strictly banned hai.",
    },
    { t: "Governing Law", d: "Yeh terms Indian law ke under governed hain." },
  ];

  return (
    <div
      style={{
        background: C.darker,
        minHeight: "100vh",
        fontFamily: "'Segoe UI',system-ui,-apple-system,sans-serif",
        color: C.text,
        maxWidth: 480,
        margin: "0 auto",
        boxShadow: "0 0 60px rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          background: C.dark,
          padding: "13px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: `1px solid ${C.border}`,
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            cursor: "pointer",
          }}
          onClick={() => setScreen("home")}
        >
          <div
            style={{
              background: C.orange,
              borderRadius: 8,
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              color: "#fff",
              fontWeight: 900,
            }}
          >
            🏗
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, color: C.text }}>
              WeHire
            </div>
            <div style={{ fontSize: 9, color: C.muted, letterSpacing: 1 }}>
              CONSTRUCTION JOBS
            </div>
          </div>
        </div>
        {screen === "home" && (
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => nav("worker-reg")}
              style={{
                background: C.green + "22",
                color: C.green,
                border: `1px solid ${C.green}44`,
                borderRadius: 7,
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Worker
            </button>
            <button
              onClick={() => nav("contractor-reg")}
              style={{
                background: C.orange + "22",
                color: C.orange,
                border: `1px solid ${C.orange}44`,
                borderRadius: 7,
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Hire
            </button>
          </div>
        )}
      </div>

      <div style={{ paddingBottom: 80 }}>
        {screen === "home" && <HomeScreen onNav={nav} />}
        {screen === "worker-reg" && (
          <WorkerRegScreen
            onBack={() => setScreen("home")}
            onSuccess={() => nav("dashboard", false)}
          />
        )}
        {screen === "contractor-reg" && (
          <ContractorRegScreen
            onBack={() => setScreen("home")}
            onSuccess={() => nav("dashboard", true)}
          />
        )}
        {screen === "workers" && (
          <WorkersScreen
            onBack={() => setScreen(isContr ? "dashboard" : "home")}
          />
        )}
        {screen === "dashboard" && (
          <DashboardScreen isContractor={isContr} onNav={nav} />
        )}
        {screen === "disclaimer" && (
          <PolicyScreen
            onBack={() => setScreen("home")}
            title="Disclaimer"
            icon="⚠️"
            color={C.orange}
            items={disclaimerItems}
          />
        )}
        {screen === "privacy" && (
          <PolicyScreen
            onBack={() => setScreen("home")}
            title="Privacy Policy"
            icon="🔒"
            color={C.blue}
            items={privacyItems}
          />
        )}
        {screen === "terms" && (
          <PolicyScreen
            onBack={() => setScreen("home")}
            title="Terms of Use"
            icon="📋"
            color={C.green}
            items={termsItems}
          />
        )}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 480,
          background: C.dark,
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          padding: "10px 0 14px",
        }}
      >
        {[
          { label: "Home", icon: "🏠", s: "home" },
          { label: "Workers", icon: "👷", s: "workers" },
          { label: "Dashboard", icon: "📊", s: "dashboard" },
        ].map((n) => (
          <button
            key={n.s}
            onClick={() => setScreen(n.s)}
            style={{
              flex: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}
          >
            <span style={{ fontSize: 20 }}>{n.icon}</span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: screen === n.s ? C.orange : C.muted,
              }}
            >
              {n.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
