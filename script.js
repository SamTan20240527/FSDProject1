//Stock Price Chart
async function fetchData() {
    try {
      const response = await axios.get('https://www.alphavantage.co/query', {
        params: {
          function: 'TIME_SERIES_DAILY_ADJUSTED',
          symbol: 'IBM',
          apikey: 'demo'
        }
      });
      
      const timeSeries = response.data['Time Series (Daily)'];
      
      if (!timeSeries) {
        throw new Error('Invalid response structure');
      }
      
      const chartData = Object.keys(timeSeries)
        .slice(0, 40)
        .reverse()
        .map(date => {
          const dayData = timeSeries[date];
          return {
            x: date,
            y: [
              parseFloat(dayData['1. open']),
              parseFloat(dayData['2. high']),
              parseFloat(dayData['3. low']),
              parseFloat(dayData['4. close'])
            ]
          };
        });
      
      renderChart(chartData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      alert('Failed to fetch stock data. Please try again later.');
    }
  }
  
  function renderChart(data) {
    const options = {
      chart: { type: 'candlestick', width: 800, height: 400 },
      series: [{ name: 'Daily Price', data: data }],
      xaxis: { type: 'category' }
    };
    const chart = new ApexCharts(document.querySelector("#chart_stock_price"), options);
    chart.render();
  }
  
  fetchData();
  