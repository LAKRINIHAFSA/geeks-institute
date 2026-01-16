// Function to create a calendar for a given year and month
function createCalendar(year, month) {

  // Create table element
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "20px";

  // Array of weekday names starting from Monday
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Create table header row
  const headerRow = document.createElement("tr");

  // Loop through weekdays and create <th>
  days.forEach(day => {
    const th = document.createElement("th");
    th.textContent = day;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  // Add header row to table
  table.appendChild(headerRow);

  // JavaScript months start from 0, so we subtract 1
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);

  // Get the weekday index (Monday = 0)
  let startDay = firstDay.getDay() - 1;
  if (startDay === -1) startDay = 6; // Fix Sunday case

  let date = 1;

  // Create rows (weeks)
  while (date <= lastDay.getDate()) {

    const row = document.createElement("tr");

    // Create 7 columns (days)
    for (let i = 0; i < 7; i++) {
      const td = document.createElement("td");
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      td.style.textAlign = "center";

      // Fill empty cells before the first day
      if ((date === 1 && i < startDay) || date > lastDay.getDate()) {
        td.textContent = "";
      } else {
        td.textContent = date;
        date++;
      }

      row.appendChild(td);
    }

    // Add row to table
    table.appendChild(row);
  }

  // Append the calendar to the document body
  document.body.appendChild(table);
}

// Example call
createCalendar(2012, 9);
