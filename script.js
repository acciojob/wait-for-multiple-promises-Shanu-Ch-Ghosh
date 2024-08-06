//your JS code here. If required.
 function createRandomPromise() {
            return new Promise(resolve => {
                const time = Math.floor(Math.random() * 3) + 1; // Random time between 1 and 3 seconds
                setTimeout(() => {
                    resolve(time);
                }, time * 1000);
            });
        }

        const promise1 = createRandomPromise();
        const promise2 = createRandomPromise();
        const promise3 = createRandomPromise();

        const startTime = Date.now();

        Promise.all([promise1, promise2, promise3])
            .then(results => {
                const totalTime = (Date.now() - startTime) / 1000;

                const tbody = document.getElementById('output');
                tbody.innerHTML = ''; // Clear the loading row

                results.forEach((result, index) => {
                    const row = tbody.insertRow();
                    row.insertCell(0).textContent = `Promise ${index + 1}`;
                    row.insertCell(1).textContent = result;
                });

                const totalRow = tbody.insertRow();
                totalRow.insertCell(0).textContent = 'Total';
                totalRow.insertCell(1).textContent = totalTime.toFixed(3); // Format to 3 decimal places
            });
