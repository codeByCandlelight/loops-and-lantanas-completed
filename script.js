// ✅ Demo Function: Load and Render All Stations
function addStations(stations) {
    stations.forEach(station => {
      addStationElement(station);
    });
  }
  
  // Initial page load
  addStations(stations);
  
  // 🟡 Task 1: Refactor to show stations in reverse order using map()
  function showStationsReversed() {
    const reversed = [...stations].reverse();
    reversed.map(station => addStationElement(station));
  }
  // Call this if you want to try the reversed version:
  // showStationsReversed();
  
  // 🔵 Task 2: Render wishlist (manually selected subset)
  const wishlist = [stations[1], stations[3]];
  
  function renderWishlist() {
    wishlist.forEach(station => addStationElement(station));
  }
  // Call this if you want to only show wishlist:
  // renderWishlist();
  
  // 🔴 Task 3: Search Stations
  function searchStations(query) {
    const list = document.getElementById("station-list");
    list.innerHTML = ""; // Clear the list first
    const results = stations.filter(station =>
      station.name.toLowerCase().includes(query.toLowerCase())
    );
  
    if (results.length > 0) {
      results.forEach(station => addStationElement(station));
    } else {
      const div = document.createElement("div");
      div.className = "station";
      div.innerHTML = `<p>No stations found for "${query}".</p>`;
      list.appendChild(div);
    }
  }
  // Example usage: searchStations("lavender");
  
  // 🟢 Task 4: Featured Station
  function showFeaturedStation() {
    const randomIndex = Math.floor(Math.random() * stations.length);
    const featured = stations[randomIndex];
  
    const list = document.getElementById("station-list");
    list.innerHTML = ""; // Clear the list before adding
    addStationElement(featured);
  }
  // Example usage: showFeaturedStation();
  
  // 🔮 Task 5: Group by City (location)
  function renderGroupedStations() {
    const list = document.getElementById("station-list");
    list.innerHTML = "";
  
    const grouped = {};
  
    stations.forEach(station => {
      if (!grouped[station.location]) {
        grouped[station.location] = [];
      }
      grouped[station.location].push(station);
    });
  
    for (const location in grouped) {
      const heading = document.createElement("h2");
      heading.textContent = location;
      list.appendChild(heading);
  
      grouped[location].forEach(station => {
        addStationElement(station);
      });
    }
  }
  // Example usage: renderGroupedStations();
  
  // ⚪ Task 6: Toggle Between All and Filtered
  let showFiltered = false;
  
  function toggleStations() {
    const list = document.getElementById("station-list");
    list.innerHTML = "";
  
    if (showFiltered) {
      addStations(stations); // All
    } else {
      const filtered = stations.filter(station =>
        station.name.includes("Loop") || station.type.includes("Garden")
      );
      filtered.forEach(station => addStationElement(station));
    }
  
    showFiltered = !showFiltered;
  }
  // Example usage: toggleStations();
  