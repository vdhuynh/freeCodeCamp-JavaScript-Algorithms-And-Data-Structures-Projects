function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 }
  ];

  let changeDue = cash - price;

  // Calculate the total amount of cash in the drawer
  const totalCID = cid.reduce((acc, curr) => acc + curr[1], 0);

  // Handle insufficient funds or closed status
  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Calculate the change to be given
  const change = currencyUnits.reduce((acc, curr) => {
    let amount = 0;

    while (cid[curr.name] > 0 && changeDue >= curr.value) {
      amount += curr.value;
      cid[curr.name] -= curr.value;
      changeDue -= curr.value;
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (amount > 0) {
      acc.push([curr.name, amount]);
    }

    return acc;
  }, []);

  // Handle open status
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}
