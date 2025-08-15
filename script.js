// Login credentials
      const validCredentials = [
        { username: "samantha", password: "1830" },
        { username: "saman", password: "1977" },
        { username: "Atik", password: "0010" },
        { username: "Gamini", password: "7777" },
      ];

      // DOM elements
      const loginForm = document.getElementById("login-form");
      const mainContent = document.getElementById("main-content");
      const loginBtn = document.getElementById("login-btn");
      const loginError = document.getElementById("login-error");
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const pedalingBtn = document.getElementById("pedaling-btn");
      const vhBtn = document.getElementById("vh-btn");
      const mcButtons = document.getElementById("mc-buttons");

      // Initially hide MC buttons
      mcButtons.style.display = "none";

      // Login functionality
      loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        const isValid = validCredentials.some(
          (cred) => cred.username === username && cred.password === password
        );

        if (isValid) {
          loginForm.style.display = "none";
          mainContent.style.display = "block";
          loginError.style.display = "none";
        } else {
          loginError.style.display = "block";
          usernameInput.value = "";
          passwordInput.value = "";
        }
      });

      // Allow Enter key to submit login
      passwordInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          loginBtn.click();
        }
      });

      // Test data
      const data = {
        iso4210_city: {
          title: "ISO 4210 - City and Trekking",
          items: {
            Handlebar: "Vertical: 200 N 100,000<br>Horizontal: 250 N 100,000",
            "Frame Pedaling": {
              description:
                "Test method: Forces on pedal spindle.<br>Force: 1,000 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1000,
                forceb: 50,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/PFF/---",
                iso: "ISO 4210 - City and Trekking",
                tester: "--Operator Name--",
                inspectionmode: "Pedaling Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "two-way reverse control",
              },
            },
            "Frame Horizontal": {
              description:
                "Test method: Forces on front fork dropouts.<br>Forward Force: 450 N<br>Backward Force: 450 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 450,
                forceb: -450,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/HFF/---",
                iso: "ISO 4210 - City and Trekking",
                tester: "--Operator Name--",
                inspectionmode: "Horizontal Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            "Frame Vertical": {
              description:
                "Test method: Forces on seat stem.<br>Force: 1,000 N<br>Test cycles: 50,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1000,
                forceb: 20,
                cycles: 50000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/VFF/---",
                iso: "ISO 4210 - City and Trekking",
                tester: "--Operator Name--",
                inspectionmode: "Vertical Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            Fork: "450 N 100,000",
            "Hub Disk Brake": "600 N 12,000",
            Pedals: "80 kg 100,000",
            Crank: "45°, 1,300 N 100,000",
            Saddle: "-",
            "Seat Post": "1,000 N 100,000",
          },
        },
        iso4210_young: {
          title: "ISO 4210 - Young Adult",
          items: {
            Handlebar: "Vertical: 200 N 100,000<br>Horizontal: 250 N 100,000",
            "Frame Pedaling": {
              description:
                "Test method: Forces on pedal spindle.<br>Force: 1,000 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1000,
                forceb: 50,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/PFF/---",
                iso: "ISO 4210 - Young Adult",
                tester: "--Operator Name--",
                inspectionmode: "Pedaling Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "two-way reverse control",
              },
            },
            "Frame Horizontal": {
              description:
                "Test method: Forces on front fork dropouts.<br>Forward Force: 450 N<br>Backward Force: 450 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 450,
                forceb: -450,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/HFF/---",
                iso: "ISO 4210 - Young Adult",
                tester: "--Operator Name--",
                inspectionmode: "Horizontal Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            "Frame Vertical": {
              description:
                "Test method: Forces on seat stem.<br>Force: 500 N<br>Test cycles: 50,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 500,
                forceb: 20,
                cycles: 50000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/VFF/---",
                iso: "ISO 4210 - Young Adult",
                tester: "--Operator Name--",
                inspectionmode: "Vertical Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            Fork: "450 N 100,000",
            "Hub Disk Brake": "600 N 12,000",
            Pedals: "80 kg 100,000",
            Crank: "45°, 1,300 N 100,000",
            Saddle: "-",
            "Seat Post": "1,000 N 100,000",
          },
        },
        iso4210_mountain: {
          title: "ISO 4210 - Mountain",
          items: {
            Handlebar: "Vertical: 270 N 100,000<br>Horizontal: 450 N 100,000",
            "Frame Pedaling": {
              description:
                "Test method: Forces on pedal spindle.<br>Force: 1,200 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1200,
                forceb: 50,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/PFF/---",
                iso: "ISO 4210 - Mountain",
                tester: "--Operator Name--",
                inspectionmode: "Pedaling Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "two-way reverse control",
              },
            },
            "Frame Horizontal": {
              description:
                "Test method: Forces on front fork dropouts.<br>Forward Force: 1,200 N<br>Backward Force: 600 N<br>Test cycles: 50,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1200,
                forceb: -600,
                cycles: 50000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/HFF/---",
                iso: "ISO 4210 - Mountain",
                tester: "--Operator Name--",
                inspectionmode: "Horizontal Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            "Frame Vertical": {
              description:
                "Test method: Forces on seat stem.<br>Force: 1,200 N<br>Test cycles: 50,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1200,
                forcer: 20,
                cycles: 50000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/VFF/---",
                iso: "ISO 4210 - Mountain",
                tester: "--Operator Name--",
                inspectionmode: "Vertical Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            Fork: "650 N 100,000",
            "Hub Disk Brake": "600 N 12,000",
            Pedals: "90 kg 100,000",
            Crank: "45°, 1,800 N<br>30°, 1,800 N 50,000",
            Saddle: "1,000 N 200,000",
            "Seat Post": "1,200 N 100,000",
          },
        },
        iso4210_racing: {
          title: "ISO 4210 - Racing",
          items: {
            Handlebar: "Vertical: 280 N 100,000<br>Horizontal: 400 N 100,000",
            "Frame Pedaling": {
              description:
                "Test method: Forces on pedal spindle.<br>Force: 1,100 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1100,
                forceb: 50,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/PFF/---",
                iso: "ISO 4210 - Racing",
                tester: "--Operator Name--",
                inspectionmode: "Pedaling Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "two-way reverse control",
              },
            },
            "Frame Horizontal": {
              description:
                "Test method: Forces on front fork dropouts.<br>Forward Force: 600 N<br>Backward Force: 600 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 600,
                forceb: -600,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/HFF/---",
                iso: "ISO 4210 - Racing",
                tester: "--Operator Name--",
                inspectionmode: "Horizontal Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            "Frame Vertical": {
              description:
                "Test method: Forces on seat stem.<br>Force: 1,200 N<br>Test cycles: 50,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1200,
                forceb: 20,
                cycles: 50000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/VFF/---",
                iso: "ISO 4210 - Racing",
                tester: "--Operator Name--",
                inspectionmode: "Vertical Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            Fork: "620 N 100,000",
            "Hub Disk Brake": "600 N 20,000",
            Pedals: "90 kg 100,000",
            Crank: "45°, 1,300 N 100,000",
            Saddle: "-",
            "Seat Post": "1,200 N 100,000",
          },
        },
        iso8098_children: {
          title: 'ISO 8098 - Children (12"-18")',
          items: {
            Handlebar: "Vertical: 115 N 100,000<br>Horizontal: 190 N 100,000",
            "Frame Pedaling": {
              description:
                "Test method: Forces on pedal spindle.<br>Force: 1,000 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 1000,
                forceb: 50,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/PFF/---",
                iso: 'ISO 8098 - Children (12"-18")',
                tester: "--Operator Name--",
                inspectionmode: "Pedaling Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "two-way reverse control",
              },
            },
            "Frame Horizontal": {
              description:
                "Test method: Forces on front fork dropouts.<br>Forward Force: 450 N<br>Backward Force: 450 N<br>Test cycles: 100,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 450,
                forceb: -450,
                cycles: 100000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/HFF/---",
                iso: 'ISO 8098 - Children (12"-18")',
                tester: "--Operator Name--",
                inspectionmode: "Horizontal Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            "Frame Vertical": {
              description:
                "Test method: Forces on seat stem.<br>Force: 500 N<br>Test cycles: 50,000<br>Frequency: below 10 Hz (suggested 2-3 Hz)",
              params: {
                forcef: 500,
                forceb: 20,
                cycles: 50000,
                frequency: 2,
                productname: "PC-Number- Model name - Size",
                testnumber: "TRI/VFF/---",
                iso: 'ISO 8098 - Children (12"-18")',
                tester: "--Operator Name--",
                inspectionmode: "Vertical Force Fatigue Test ",
                temperature: 31,
                remarks: 'Ex: Size 26 * 12.5"',
                companyname: "TRIDENT",
                modeofcontrol: "one-way control",
              },
            },
            Fork: "400 N 100,000",
            "Hub Disk Brake": "-",
            Pedals: "30 kg 100,000",
            Crank: "45°, 700 N 100,000",
            Saddle: "700 N 100,000",
            "Seat Post": "-",
          },
        },
      };

      const bikeSelect = document.getElementById("bikeType");
      const itemSelect = document.getElementById("itemType");
      const itemSelector = document.getElementById("itemSelector");
      const details = document.getElementById("details");
      const testTimes = document.getElementById("test-times");
      const title = document.getElementById("title");
      const itemsList = document.getElementById("items");

      // Store current bike and test data
      let currentBike = null;
      let currentItem = null;

      bikeSelect.addEventListener("change", function () {
        const selected = this.value;
        itemSelect.value = ""; // Reset item select
        if (selected) {
          itemSelector.style.display = "block";
          details.style.display = "none";
          testTimes.style.display = "none";
          mcButtons.style.display = "none";
          currentBike = selected;
        } else {
          itemSelector.style.display = "none";
          details.style.display = "none";
          testTimes.style.display = "none";
          mcButtons.style.display = "none";
        }
      });

      itemSelect.addEventListener("change", function () {
        const item = this.value;
        const bike = bikeSelect.value;
        if (item && bike) {
          const info = data[bike];
          title.textContent = info.title + " - " + item;
          itemsList.innerHTML = "";
          currentItem = item;

          if (item === "Frame") {
            mcButtons.style.display = "block";
            createTestSection(
              "Pedaling Force Fatigue Test",
              info.items["Frame Pedaling"]
            );
            createTestSection(
              "Horizontal Force Fatigue Test",
              info.items["Frame Horizontal"]
            );
            createTestSection(
              "Vertical Force Fatigue Test",
              info.items["Frame Vertical"]
            );
          } else {
            mcButtons.style.display = "none";
            createLi(item, info.items[item]);
          }
          details.style.display = "block";
          testTimes.style.display = "block";
        } else {
          details.style.display = "none";
          testTimes.style.display = "none";
          mcButtons.style.display = "none";
        }
      });

      // Generate MC Manual Files
      pedalingBtn.addEventListener("click", function () {
        if (currentBike && currentItem === "Frame") {
          const pedalingData = data[currentBike].items["Frame Pedaling"].params;
          generateMCFile(pedalingData, "Pedaling");
        }
      });

      vhBtn.addEventListener("click", function () {
        if (currentBike && currentItem === "Frame") {
          const horizontalData =
            data[currentBike].items["Frame Horizontal"].params;
          const verticalData = data[currentBike].items["Frame Vertical"].params;
          generateMCFile([horizontalData, verticalData], "Vertical_Horizontal");
        }
      });

      function generateMCFile(testData, testType) {
        let content = "";
        const date = new Date().toISOString().split("T")[0];

        if (Array.isArray(testData)) {
          // Combined file for vertical and horizontal
          testData.forEach((data, index) => {
            const testName =
              index === 0
                ? "Horizontal Force Fatigue Test"
                : "Vertical Force Fatigue Test";
            content += `=== ${testName} ===\n`;
            content += formatTestParameters(data);
            content += "\n\n";
          });
        } else {
          // Single test file
          content = formatTestParameters(testData);
        }

        const filename = `MC_Manual_${testType}_${date}.txt`;
        downloadFile(content, filename);
      }

      function formatTestParameters(params) {
        return `Test Number: ${params.testnumber}
Mode of Control: ${params.modeofcontrol}
Number of Tests: ${params.cycles}
Frequency (Hz): ${params.frequency}
Magnitude of Force (N): ${params.forcef}
Amplitude under Force (N): ${params.forceb}
Allowable Deviation Times: 10
Tester: ${params.tester}
Product Name: ${params.productname}
Temperature (°C): ${params.temperature}
Inspection Mode: ${params.inspectionmode}
Inspection Standard: ${params.iso}
Remarks: ${params.remarks}
Company Name: ${params.companyname}

=== Protection Settings ===
MaxDis [mm]: 0
MinDis [mm]: 0
MaxForce [N]: 0
MinForce [N]: 0`;
      }

      function downloadFile(content, filename) {
        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }

      function createTestSection(testName, testData) {
        const li = document.createElement("li");
        li.className = "test-section";

        let content = `<strong>${testName}</strong>`;
        content += `<div class="test-description">${testData.description}</div>`;

        if (testData.params) {
          content += `
          <table class="test-params">
            <tr>
              <td class="bold">Name</td>
              <td class="bold">Value</td>
            </tr>
            <tr>
              <td>Test number</td>
              <td>${testData.params.testnumber}</td>
            </tr>
            <tr>
              <td>Mode of control</td>
              <td><strong>${testData.params.modeofcontrol}</strong></td>
            </tr>
            <tr>
              <td>Number of tests</td>
              <td>${testData.params.cycles}</td>
            </tr>
            <tr>
              <td>Frequency (Hz)</td>
              <td>${testData.params.frequency}</td>
            </tr>
            <tr>
              <td>Magnitude of force (N)</td>
              <td>${testData.params.forcef}</td>
            </tr>
            <tr>
              <td>Amplitude under force (N)</td>
              <td>${testData.params.forceb}</td>
            </tr>
            <tr>
              <td>Allowable deviation times</td>
              <td>10</td>
            </tr>
            <tr>
              <td class="bold">TESTER</td>
              <td>${testData.params.tester}</td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>${testData.params.productname}</td>
            </tr>
            <tr>
              <td>Temperature [°C]</td>
              <td>${testData.params.temperature}</td>
            </tr>
            <tr>
              <td>Inspection Mode</td>
              <td>${testData.params.inspectionmode}</td>
            </tr>
            <tr>
              <td>Inspection Standard</td>
              <td>${testData.params.iso}</td>
            </tr>
            <tr>
              <td>Remarks</td>
              <td>${testData.params.remarks}</td>
            </tr>
            <tr>
              <td>Company Name</td>
              <td>${testData.params.companyname}</td>
            </tr>
          </table>
          
          <table class="test-params">
            <tr class="header-row">
              <th colspan="3">Protection Settings</th>
            </tr>
            <tr class="sub-header">
              <th>Protect</th>
              <th>First</th>
              <th>Second</th>
            </tr>
            <tr>
              <td>MaxDis [mm]</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>MinDis [mm]</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>MaxForce [N]</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>MinForce [N]</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </table>`;
        }

        li.innerHTML = content;
        itemsList.appendChild(li);
      }

      function createLi(key, value) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${key}</strong>${value}`;
        itemsList.appendChild(li);
      }