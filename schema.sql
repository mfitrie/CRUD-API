CREATE TABLE Customer (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    fulladdress VARCHAR(300),
    createdat TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMPTZ,
    deletedat TIMESTAMPTZ
);

CREATE TABLE Wallet (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    balance NUMERIC,
    customerid UUID UNIQUE REFERENCES Customer(id) ON DELETE CASCADE,
    createdat TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updatedat TIMESTAMPTZ,
    deletedat TIMESTAMPTZ
);