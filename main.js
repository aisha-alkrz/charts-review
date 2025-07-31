// The provided code with all Arabic labels and comments translated to English

const chartData = {
    'single-value': {
        'description': 'Categorical and Quantitative Data (Single Value)',
        'data': {
            'meta': {
                'xLabel': 'Category',
                'yLabel': 'Value 4',
                'labelKey': 'label',
                'valueKey': 'value',
                'width': 450,
                'height': 350,
                'xScaleType': 'band', // X Axis Type: Categorical
                'yScaleType': 'linear', // Y Axis Type: Quantitative
                'colors': ['#4e79a7', '#f28e2c', '#e15759', '#76b7b2']
            },
            'items': [
                {'label': 'Product A', 'value': 100},
                {'label': 'Product B', 'value': 150},
                {'label': 'Product C', 'value': 75},
                {'label': 'Product D', 'value': 120}
            ]
        },
        'charts': {
            'bar-chart': {'name': 'Bar Chart', 'func': 'drawBarChart'},
            'dot-plot': {'name': 'Dot Plot', 'func': 'drawDotPlot'},
            'pie-chart': {'name': 'Pie Chart', 'func': 'drawPieChart'},
            'waffle-chart': {'name': 'Waffle Chart', 'func': 'drawWaffleChart'}
        }
    },
'multiple-series': {
  description: 'Tabular structure with multiple numeric values per group',
  data: {
    meta: {
      xLabel: 'Group',
      yLabel: 'Value',
      labelKey: 'groupKey',          // مفتاح اسم كل مجموعة (X)
      seriesKey: 'seriesValues',     // المفتاح الذي يحتوي على جميع السلاسل المرتبطة بالمجموعة
      totalKey: 'aggregate',         // مفتاح القيمة الإجمالية للمجموعة (اختياري)
      width: 500,
      height: 350,
      xScaleType: 'band',
      yScaleType: 'linear',
      colors: ['#e16100', '#78b7b2', '#e80896ff', '#0043a8ff']
    },
    items: [
      {
        groupKey: 'G1',
        seriesValues: {
          'Metric A': 30,
          'Metric B': 20,
          'Metric C': 15
        },
        aggregate: 65
      },
      {
        groupKey: 'G2',
        seriesValues: {
          'Metric A': 40,
          'Metric B': 25,
          'Metric C': 10
        },
        aggregate: 75
      },
      {
        groupKey: 'G3',
        seriesValues: {
          'Metric A': 20,
          'Metric B': 35,
          'Metric C': 25
        },
        aggregate: 80
      },
      {
        groupKey: 'G4',
        seriesValues: {
          'Metric A': 35,
          'Metric B': 30,
          'Metric C': 20
        },
        aggregate: 85
      }
    ]
  },
  charts: {
    'grouped-bar-chart': { name: 'Grouped Bar Chart', func: 'drawGroupedBarChart' },
    'stacked-bar-chart': { name: 'Stacked Bar Chart', func: 'drawStackedBarChart' },
    'stacked-area-chart': { name: 'Stacked Area Chart', func: 'drawStackedAreaChart' },
    'line-chart-multiple': { name: 'Multi-Line Chart', func: 'drawLineChartMultipleLines' },
    'radar-chart': { name: 'Radar Chart', func: 'drawRadarChart' }
  }
},
'hierarchical' :{
  description: 'Hierarchical structure with nested children',
  data: {
    meta: {
      labelKey: 'label',     
      valueKey: 'value',  
      width: 600,
      height: 400,
      colors: ['#8cd17d', '#b6992d', '#499894', '#d37295']
    },
    items: {
      label: 'Company',
      value: 100,
      children: [
        {
          label: 'Sales',
          value: 40,
          children: [
            { label: 'Domestic', value: 25 },
            { label: 'International', value: 15 }
          ]
        },
        {
          label: 'Engineering',
          value: 60,
          children: [
            { label: 'Frontend', value: 30 },
            { label: 'Backend', value: 30 }
          ]
        }
      ]
    }
  },
  charts: {
    'tree-diagram': { name: 'Tree Diagram', func: 'drawTreeDiagram' },
    'circle-packing': { name: 'Circle Packing', func: 'drawCirclePacking' },
    'sunburst': { name: 'Sunburst Chart', func: 'drawSunburstChart' },
    'treemap': { name: 'Treemap Chart', func: 'drawTreemap' },
    'radialCluster': { name: 'RadialCluster Chart', func: 'drawRadialCluster' },
     'icicleChart': { name: 'Icicle Chart', func: 'drawIcicleChart' }
  }
},
'distribution': {
  description: 'Statistical distribution for one or more entity groups',
  data: {
    meta: {
      groupKey: 'entity',
      valueKey: 'observations',
      numericKey: 'value',
      labelKey: 'label',
      xLabel: 'Measured Value',
      yLabel: 'Frequency / Density',
      width: 600,
      height: 350,
      xScaleType: 'linear',
      yScaleType: 'linear',
      colors: ['#59a14f', '#edc948', '#b07aa1']
    },
    items: [
      {
        entity: 'Entity A',
        observations: [
          { value: 31.68, label: 'Entity A Sample 1' },
          { value: 35.64, label: 'Entity A Sample 2' },
          { value: 30.79, label: 'Entity A Sample 3' },
          { value: 46.77, label: 'Entity A Sample 4' },
          { value: 54.28, label: 'Entity A Sample 5' },
          { value: 31.70, label: 'Entity A Sample 6' },
          { value: 43.81, label: 'Entity A Sample 7' },
          { value: 21.01, label: 'Entity A Sample 8' },
          { value: 28.97, label: 'Entity A Sample 9' },
          { value: 36.12, label: 'Entity A Sample 10' },
          { value: 16.38, label: 'Entity A Sample 11' },
          { value: 45.06, label: 'Entity A Sample 12' },
          { value: 41.04, label: 'Entity A Sample 13' },
          { value: 21.00, label: 'Entity A Sample 14' },
          { value: 43.29, label: 'Entity A Sample 15' },
          { value: 39.15, label: 'Entity A Sample 16' },
          { value: 33.03, label: 'Entity A Sample 17' },
          { value: 36.52, label: 'Entity A Sample 18' },
          { value: 35.10, label: 'Entity A Sample 19' },
          { value: 44.15, label: 'Entity A Sample 20' }
        ]
      },
      {
        entity: 'Entity B',
        observations: [
          { value: 75.69, label: 'Entity B Sample 1' },
          { value: 49.31, label: 'Entity B Sample 2' },
          { value: 45.33, label: 'Entity B Sample 3' },
          { value: 65.56, label: 'Entity B Sample 4' },
          { value: 45.95, label: 'Entity B Sample 5' },
          { value: 45.51, label: 'Entity B Sample 6' },
          { value: 47.05, label: 'Entity B Sample 7' },
          { value: 65.95, label: 'Entity B Sample 8' },
          { value: 66.95, label: 'Entity B Sample 9' },
          { value: 41.86, label: 'Entity B Sample 10' },
          { value: 73.10, label: 'Entity B Sample 11' },
          { value: 37.68, label: 'Entity B Sample 12' },
          { value: 62.28, label: 'Entity B Sample 13' },
          { value: 35.35, label: 'Entity B Sample 14' },
          { value: 67.14, label: 'Entity B Sample 15' },
          { value: 49.79, label: 'Entity B Sample 16' },
          { value: 55.22, label: 'Entity B Sample 17' },
          { value: 69.30, label: 'Entity B Sample 18' },
          { value: 65.20, label: 'Entity B Sample 19' },
          { value: 65.72, label: 'Entity B Sample 20' }
        ]
      },
      {
        entity: 'Entity C',
        observations: [
          { value: 40.33, label: 'Entity C Sample 1' },
          { value: 47.57, label: 'Entity C Sample 2' },
          { value: 49.32, label: 'Entity C Sample 3' },
          { value: 50.41, label: 'Entity C Sample 4' },
          { value: 46.76, label: 'Entity C Sample 5' },
          { value: 38.68, label: 'Entity C Sample 6' },
          { value: 47.28, label: 'Entity C Sample 7' },
          { value: 42.58, label: 'Entity C Sample 8' },
          { value: 44.76, label: 'Entity C Sample 9' },
          { value: 47.99, label: 'Entity C Sample 10' },
          { value: 48.42, label: 'Entity C Sample 11' },
          { value: 40.15, label: 'Entity C Sample 12' },
          { value: 51.19, label: 'Entity C Sample 13' },
          { value: 35.40, label: 'Entity C Sample 14' },
          { value: 53.21, label: 'Entity C Sample 15' },
          { value: 47.55, label: 'Entity C Sample 16' },
          { value: 44.25, label: 'Entity C Sample 17' },
          { value: 40.19, label: 'Entity C Sample 18' },
          { value: 44.67, label: 'Entity C Sample 19' },
          { value: 48.92, label: 'Entity C Sample 20' }
        ]
      }
    ]
  },
  charts: {
    'histogram':     { name: 'Histogram',              func: 'drawHistogram' },
    'box-plot':      { name: 'Box Plot',               func: 'drawBoxPlot' },
    'density-plot':  { name: 'Density Plot (Simple)',  func: 'drawDensityPlot' }
  }
}



};


const categoryButtonsDiv = document.getElementById('category-buttons');
const chartContainer = document.getElementById('chart-container');
const dataDisplay = document.getElementById('data-display');
const detailsContent = document.getElementById('details-content');

let currentCategory = null;
let currentChartFunc = null;

// Function to render category buttons and their sub-charts
function renderCategoryButtons() {
    categoryButtonsDiv.innerHTML = '';
    for (const categoryKey in chartData) {
        const category = chartData[categoryKey];
        const categoryBtn = document.createElement('button');
        categoryBtn.classList.add('category-button');
        categoryBtn.textContent = category.description;
        categoryBtn.dataset.category = categoryKey;
        categoryButtonsDiv.appendChild(categoryBtn);

        const chartButtonsContainer = document.createElement('div');
        chartButtonsContainer.classList.add('chart-buttons-container');
        chartButtonsContainer.style.display = 'none'; // Initially hidden
        categoryButtonsDiv.appendChild(chartButtonsContainer);

        for (const chartKey in category.charts) {
            const chart = category.charts[chartKey];
            const chartBtn = document.createElement('button');
            chartBtn.classList.add('chart-button');
            chartBtn.textContent = chart.name;
            chartBtn.dataset.category = categoryKey;
            chartBtn.dataset.chart = chartKey;
            chartButtonsContainer.appendChild(chartBtn);

            chartBtn.addEventListener('click', () => {
                // Remove active class from all chart buttons
                document.querySelectorAll('.chart-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                chartBtn.classList.add('active');
                categoryBtn.classList.add('active');


                loadChart(categoryKey, chartKey);
            });
        }

        categoryBtn.addEventListener('click', () => {
            // Toggle visibility of chart buttons container
            const isVisible = chartButtonsContainer.style.display === 'block';
            chartButtonsContainer.style.display = isVisible ? 'none' : 'block';

            // Remove active class from all category buttons and chart buttons
            document.querySelectorAll('.category-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.chart-button').forEach(btn => btn.classList.remove('active'));

            // Add active class to the clicked category button if its sub-buttons are visible
            if (!isVisible) {
                categoryBtn.classList.add('active');
            }
        });
    }
}
function loadChart(categoryKey, chartKey) {
  const categoryData = chartData[categoryKey];
  const chartInfo = categoryData.charts[chartKey];
  const data = categoryData.data;

  chartContainer.innerHTML = '';
  detailsContent.innerHTML = '';
  dataDisplay.textContent = JSON.stringify(data, null, 2);

  const meta = data.meta;

  const xScaleType = chartKey === 'box-plot' ? 'band' : (meta.xScaleType || 'Not specified');
  const yScaleType = meta.yScaleType || 'Not specified';
  const width = meta.width || 'Not specified';
  const height = meta.height || 'Not specified';

  // ✅ شرح تقني لكل شارت
  const chartTechnicalDetails = {

  'bar-chart': `
    <div class="detail-item"><strong>Chart Structure:</strong> One vertical bar per category.</div>
    <div class="detail-item"><strong>X-Axis:</strong> Category label (e.g., Product A).</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Numeric value for each category.</div>
    <div class="detail-item"><strong>Legend:</strong> used.</div>
  `,
  'dot-plot': `
    <div class="detail-item"><strong>Chart Structure:</strong> One dot per category.</div>
    <div class="detail-item"><strong>X-Axis:</strong> Category label.</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Dot position shows value.</div>
    <div class="detail-item"><strong>Legend:</strong>  used.</div>
  `,
  'pie-chart': `
    <div class="detail-item"><strong>Chart Structure:</strong> Circular pie segments.</div>
    <div class="detail-item"><strong>Axes:</strong> Not applicable.</div>
    <div class="detail-item"><strong>Value Representation:</strong> Angle of each slice.</div>
    <div class="detail-item"><strong>Legend:</strong> Required to match colors with labels.</div>
  `,
  'waffle-chart': `
    <div class="detail-item"><strong>Chart Structure:</strong> Grid of small squares.</div>
    <div class="detail-item"><strong>Axes:</strong> Not applicable.</div>
    <div class="detail-item"><strong>Value Representation:</strong> Count of filled squares.</div>
    <div class="detail-item"><strong>Legend:</strong> Required to match color to label.</div>
  `,
  'grouped-bar-chart': `
    <div class="detail-item"><strong>Chart Structure:</strong> Bars grouped by category.</div>
    <div class="detail-item"><strong>X-Axis:</strong> Group (e.g., G1, G2).</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Value of each sub-category.</div>
    <div class="detail-item"><strong>Legend:</strong> Required to map color to metric.</div>
  `,
  'stacked-bar-chart': `
    <div class="detail-item"><strong>Chart Structure:</strong> Stacked segments per bar.</div>
    <div class="detail-item"><strong>X-Axis:</strong> Group key.</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Total value of stacked segments.</div>
    <div class="detail-item"><strong>Legend:</strong> Required to identify segments.</div>
  `,
  'stacked-area-chart': `
    <div class="detail-item"><strong>Chart Structure:</strong> Layered areas by series.</div>
    <div class="detail-item"><strong>X-Axis:</strong> Category or time.</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Stacked value total.</div>
    <div class="detail-item"><strong>Legend:</strong> Required to distinguish series.</div>
  `,
  'line-chart-multiple': `
    <div class="detail-item"><strong>Chart Structure:</strong> Multiple lines over same axis.</div>
    <div class="detail-item"><strong>X-Axis:</strong> Category or time.</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Value for each metric.</div>
    <div class="detail-item"><strong>Legend:</strong> Required to distinguish lines.</div>
  `,
  'radar-chart': `
    <div class="detail-item"><strong>Chart Structure:</strong> Polygon per group on radial grid.</div>
    <div class="detail-item"><strong>Axes:</strong> One axis per metric, arranged in circle.</div>
    <div class="detail-item"><strong>Value Representation:</strong> Distance from center.</div>
    <div class="detail-item"><strong>Legend:</strong> Vertical list on right side.</div>
  `,
  'treemap': `
    <div class="detail-item"><strong>Chart Structure:</strong> Rectangles sized by value, nested by hierarchy.</div>
    <div class="detail-item"><strong>Axes:</strong> Not applicable.</div>
    <div class="detail-item"><strong>Value Representation:</strong> Area of each rectangle.</div>
    <div class="detail-item"><strong>Legend:</strong> Often omitted; label shown inside shape.</div>
  `,
  'tree-diagram': `
    <div class="detail-item"><strong>Chart Structure:</strong> Parent-child lines in vertical or horizontal layout.</div>
    <div class="detail-item"><strong>Axes:</strong> Not applicable.</div>
    <div class="detail-item"><strong>Hierarchy:</strong> Uses nested children structure.</div>
    <div class="detail-item"><strong>Legend:</strong> Not needed.</div>
  `,
  'circle-packing': `
    <div class="detail-item"><strong>Chart Structure:</strong> Circles nested inside circles.</div>
    <div class="detail-item"><strong>Value Representation:</strong> Circle radius.</div>
    <div class="detail-item"><strong>Legend:</strong> Optional; labels may be embedded.</div>
  `,
  'sunburst': `
    <div class="detail-item"><strong>Chart Structure:</strong> Circular segments arranged by depth level.</div>
    <div class="detail-item"><strong>Value Representation:</strong> Segment angle/area.</div>
    <div class="detail-item"><strong>Legend:</strong> Optional or text inside segments.</div>
  `,
  'radialCluster': `
    <div class="detail-item"><strong>Chart Structure:</strong> Circular tree layout (nodes + links).</div>
    <div class="detail-item"><strong>Hierarchy:</strong> Based on nested children.</div>
    <div class="detail-item"><strong>Legend:</strong> Not used; focus on structure.</div>
  `,
  'icicleChart': `
    <div class="detail-item"><strong>Chart Structure:</strong> Horizontal stacked rectangles per level.</div>
    <div class="detail-item"><strong>Hierarchy:</strong> Nested children represented top-down.</div>
    <div class="detail-item"><strong>Legend:</strong> Typically not needed.</div>
  `,
  'histogram': `
    <div class="detail-item"><strong>Chart Structure:</strong> Bars per value range (bin).</div>
    <div class="detail-item"><strong>X-Axis:</strong> Numeric range (binned).</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Frequency or count.</div>
    <div class="detail-item"><strong>Legend:</strong> Not used.</div>
  `,
  'box-plot': `
    <div class="detail-item"><strong>Chart Structure:</strong> Box with median and whiskers for min/max.</div>
    <div class="detail-item"><strong>X-Axis:</strong> Category or group.</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Value distribution.</div>
    <div class="detail-item"><strong>Legend:</strong> Not commonly needed.</div>
  `,
  'density-plot': `
    <div class="detail-item"><strong>Chart Structure:</strong> Smooth curve showing data distribution.</div>
    <div class="detail-item"><strong>X-Axis:</strong> Numeric values.</div>
    <div class="detail-item"><strong>Y-Axis:</strong> Density (probability).</div>
    <div class="detail-item"><strong>Legend:</strong> Used to distinguish groups/colors.</div>
  `

  };

  let detailsHtml = `
    <div class="detail-item"><strong>Chart Name:</strong> ${chartInfo.name}</div>
    <div class="detail-item"><strong>Data Description:</strong> ${categoryData.description}</div>
    <div class="detail-item"><strong>Width:</strong> ${width}px</div>
    <div class="detail-item"><strong>Height:</strong> ${height}px</div>
    <div class="detail-item"><strong>Used Colors:</strong> ${meta.colors ? meta.colors.join(', ') : 'Not specified'}</div>
    <hr />
    ${chartTechnicalDetails[chartKey] || '<div class="detail-item"><em>No technical breakdown available for this chart.</em></div>'}
  `;

  detailsContent.innerHTML = detailsHtml;

  const funcName = chartInfo.func;
  if (typeof window[funcName] === 'function') {
    window[funcName](chartContainer, data.items, meta);
  } else {
    chartContainer.innerHTML = `<p>Chart \"${chartInfo.name}\" is not implemented yet.</p>`;
  }
}



const tooltip = d3.select("body").append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("padding", "6px 7px")
  .style("background", "rgba(0, 0, 0, 0.7)")
  .style("color", "#fff")
  .style("border-radius", "4px")
  .style("pointer-events", "none")
  .style("font-size", "12px")
  .style("display", "none");

// رسم الليجند المشترك
function drawLegend(svg, data, meta, chartWidth, chartHeight) {
  const categories = data.map(d => d[meta.labelKey]);
  const legend = svg.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(0, ${chartHeight + 67})`);

  categories.forEach((label, i) => {
    const group = legend.append("g")
      .attr("transform", `translate(${i * 100}, 0)`);

    group.append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", meta.colors[i % meta.colors.length]);

    group.append("text")
      .attr("x", 18)
      .attr("y", 10)
      .text(label)
      .style("font-size", "12px");
  });
}

// Bar Chart
window.drawBarChart = function(container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height + 50)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
    .domain(data.map(d => d[meta.labelKey]))
    .range([0, width])
    .padding(0.1);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d[meta.valueKey])])
    .nice()
    .range([height, 0]);

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));

  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d[meta.labelKey]))
    .attr("y", d => y(d[meta.valueKey]))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d[meta.valueKey]))
    .attr("fill", (d, i) => meta.colors[i % meta.colors.length])
    .on("mousemove", (event, d) => {
      tooltip.style("display", "block")
        .html(`${d[meta.labelKey]}: ${d[meta.valueKey]}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseleave", () => tooltip.style("display", "none"));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel);

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 15)
    .attr("x", -(height / 2))
    .style("text-anchor", "middle")
    .text(meta.yLabel);

  drawLegend(svg, data, meta, width, height);
};

// Dot Plot
window.drawDotPlot = function(container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height + 50)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scalePoint()
    .domain(data.map(d => d[meta.labelKey]))
    .range([0, width])
    .padding(0.5);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d[meta.valueKey])])
    .nice()
    .range([height, 0]);

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append("g").call(d3.axisLeft(y));

  svg.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d[meta.labelKey]))
    .attr("cy", d => y(d[meta.valueKey]))
    .attr("r", 5)
    .attr("fill", (d, i) => meta.colors[i % meta.colors.length])
    .on("mousemove", (event, d) => {
      tooltip.style("display", "block")
        .html(`${d[meta.labelKey]}: ${d[meta.valueKey]}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseleave", () => tooltip.style("display", "none"));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel);

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 15)
    .attr("x", -(height / 2))
    .style("text-anchor", "middle")
    .text(meta.yLabel);

  drawLegend(svg, data, meta, width, height);
};
window.drawPieChart = function(container, data, meta) {
  const legendWidth = 150;
  const radius = Math.min(meta.width, meta.height) / 2 - 20;

  // svg أكبر ليشمل الشارت + الليجند
  const svg = d3.select(container).append("svg")
    .attr("width", meta.width + legendWidth)
    .attr("height", meta.height)
    .append("g");

  // مجموعة الرسم في منتصف الشارت فقط
  const chartGroup = svg.append("g")
    .attr("transform", `translate(${meta.width / 2},${meta.height / 2})`);

  const pie = d3.pie()
    .sort(null)
    .value(d => d[meta.valueKey]);

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  const color = d3.scaleOrdinal()
    .domain(data.map(d => d[meta.labelKey]))
    .range(meta.colors);

  const arcs = chartGroup.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

  arcs.append("path")
    .attr("d", arc)
    .attr("fill", d => color(d.data[meta.labelKey]))
    .on("mousemove", (event, d) => {
      tooltip.style("display", "block")
        .html(`${d.data[meta.labelKey]}: ${d.data[meta.valueKey]}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseleave", () => tooltip.style("display", "none"));

  arcs.append("text")
    .attr("transform", d => `translate(${arc.centroid(d)})`)
    .attr("dy", "0.35em")
    .attr("text-anchor", "middle")
    .text(d => d.data[meta.labelKey])
    .style("font-size", "12px")
    .attr("fill", "#fff");

  // --- Legend على اليمين ---
  const legend = svg.append("g")
    .attr("transform", `translate(${meta.width}, 20)`);

  data.forEach((d, i) => {
    const group = legend.append("g")
      .attr("transform", `translate(0, ${i * 20})`);

    group.append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", meta.colors[i % meta.colors.length]);

    group.append("text")
      .attr("x", 18)
      .attr("y", 10)
      .text(d[meta.labelKey])
      .style("font-size", "12px");
  });
};

window.drawWaffleChart = function(container, data, meta) {
  const numRows = 10;
  const numCols = 10;
  const totalCells = numRows * numCols;
  const cellSize = 20;
  const cellPadding = 2;
  const legendWidth = 100;

  const totalValue = d3.sum(data, d => d[meta.valueKey]);
  const cells = [];

  data.forEach((d, i) => {
    const blocks = Math.round((d[meta.valueKey] / totalValue) * totalCells);
    for (let j = 0; j < blocks; j++) {
      cells.push({
        label: d[meta.labelKey],
        value: d[meta.valueKey],
        color: meta.colors[i % meta.colors.length]
      });
    }
  });

  while (cells.length < totalCells) {
    cells.push({ label: "Empty", value: 0, color: "#ccc" });
  }

  const waffleWidth = meta.width - legendWidth;

  const svg = d3.select(container).append("svg")
    .attr("width", waffleWidth + legendWidth )
    .attr("height", meta.height)
    .append("g");

  // مجموعة الشارت
  const chartGroup = svg.append("g")
    .attr("transform", `translate(0, 20)`);

  chartGroup.selectAll("rect")
    .data(cells)
    .enter().append("rect")
    .attr("x", (d, i) => (i % numCols) * (cellSize + cellPadding))
    .attr("y", (d, i) => Math.floor(i / numCols) * (cellSize + cellPadding))
    .attr("width", cellSize)
    .attr("height", cellSize)
    .attr("fill", d => d.color)
    .on("mousemove", (event, d) => {
      if (d.label !== "Empty") {
        tooltip.style("display", "block")
          .html(`${d.label}: ${d.value}`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 20) + "px");
      }
    })
    .on("mouseleave", () => tooltip.style("display", "none"));

  // الليجند
  const legend = svg.append("g")
    .attr("transform", `translate(${waffleWidth}, 20)`);

  data.forEach((d, i) => {
    const group = legend.append("g")
      .attr("transform", `translate(0, ${i * 18})`);

    group.append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", meta.colors[i % meta.colors.length]);

    group.append("text")
      .attr("x", 18)
      .attr("y", 10)
      .text(d[meta.labelKey])
      .style("font-size", "12px");
  });
};

window.drawGroupedBarChart = function(container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  const seriesNames = Object.keys(data[0][meta.seriesKey]);

  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height + 50)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x0 = d3.scaleBand()
    .domain(data.map(d => d[meta.labelKey]))
    .range([0, width])
    .paddingInner(0.1);

  const x1 = d3.scaleBand()
    .domain(seriesNames)
    .range([0, x0.bandwidth()])
    .padding(0.05);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d3.max(seriesNames, key => d[meta.seriesKey][key]))])
    .nice()
    .range([height, 0]);

  const color = d3.scaleOrdinal().domain(seriesNames).range(meta.colors);

  svg.append("g")
    .selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", d => `translate(${x0(d[meta.labelKey])},0)`)
    .selectAll("rect")
    .data(d => seriesNames.map(key => ({ key, value: d[meta.seriesKey][key] })))
    .enter().append("rect")
    .attr("x", d => x1(d.key))
    .attr("y", d => y(d.value))
    .attr("width", x1.bandwidth())
    .attr("height", d => height - y(d.value))
    .attr("fill", d => color(d.key));

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x0));

  svg.append("g").call(d3.axisLeft(y));

  // Axis Labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel);

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .text(meta.yLabel);

  // Legend at bottom
  const legend = svg.append("g")
    .attr("transform", `translate(0, ${height + margin.bottom + 10})`);

  seriesNames.forEach((key, i) => {
    const g = legend.append("g").attr("transform", `translate(${i * 120}, 0)`);
    g.append("rect").attr("width", 12).attr("height", 12).attr("fill", color(key));
    g.append("text").attr("x", 18).attr("y", 10).text(key).style("font-size", "12px");
  });
};

window.drawStackedBarChart = function (container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  const seriesNames = Object.keys(data[0][meta.seriesKey]);
  const stack = d3.stack()
    .keys(seriesNames)
    .value((d, key) => d[meta.seriesKey][key]); // ← يعتمد على meta.seriesKey

  const stackedData = stack(data);

  const x = d3.scaleBand()
    .domain(data.map(d => d[meta.labelKey]))
    .range([0, width])
    .padding(0.1);

  const y = d3.scaleLinear()
    .domain([
      0,
      d3.max(data, d => {
        const values = Object.values(d[meta.seriesKey]);
        return values.reduce((a, b) => a + b, 0);
      })
    ])
    .nice()
    .range([height, 0]);

  const color = d3.scaleOrdinal()
    .domain(seriesNames)
    .range(meta.colors);

  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height + 50)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const tooltip = d3.select("#chart-tooltip");

  svg.selectAll("g.layer")
    .data(stackedData)
    .enter().append("g")
    .attr("fill", d => color(d.key))
    .selectAll("rect")
    .data(d => d)
    .enter().append("rect")
    .attr("x", d => x(d.data[meta.labelKey]))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .on("mousemove", (event, d) => {
      const key = d3.select(event.target.parentNode).datum().key;
      const value = d[1] - d[0];
      tooltip.style("display", "block")
        .html(`<strong>${key}</strong>: ${value}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseleave", () => tooltip.style("display", "none"));

  svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel);

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .text(meta.yLabel);

  const legend = svg.append("g")
    .attr("transform", `translate(0, ${height + margin.bottom + 10})`);

  seriesNames.forEach((key, i) => {
    const g = legend.append("g").attr("transform", `translate(${i * 120}, 0)`);
    g.append("rect").attr("width", 12).attr("height", 12).attr("fill", color(key));
    g.append("text").attr("x", 18).attr("y", 10).text(key).style("font-size", "12px");
  });
};
window.drawStackedAreaChart = function (container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  const seriesNames = Object.keys(data[0][meta.seriesKey]);
  const stack = d3.stack()
    .keys(seriesNames)
    .value((d, key) => d[meta.seriesKey][key]);

  const stackedData = stack(data);

  const x = d3.scalePoint()
    .domain(data.map(d => d[meta.labelKey]))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([
      0,
      d3.max(data, d => {
        const values = Object.values(d[meta.seriesKey]);
        return values.reduce((a, b) => a + b, 0);
      })
    ])
    .nice()
    .range([height, 0]);

  const color = d3.scaleOrdinal().domain(seriesNames).range(meta.colors);

  const area = d3.area()
    .x(d => x(d.data[meta.labelKey]))
    .y0(d => y(d[0]))
    .y1(d => y(d[1]));

  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height + 50)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  svg.selectAll("path")
    .data(stackedData)
    .enter().append("path")
    .attr("fill", d => color(d.key))
    .attr("d", area);

  // Add optional tooltip by drawing dots
  const tooltip = d3.select("#chart-tooltip");
  stackedData.forEach((layer, i) => {
    svg.selectAll(`.circle-${i}`)
      .data(layer)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.data[meta.labelKey]))
      .attr("cy", d => y(d[1]))
      .attr("r", 3)
      .attr("fill", color(layer.key))
      .on("mousemove", (event, d) => {
        const value = d[1] - d[0];
        tooltip.style("display", "block")
          .html(`<strong>${layer.key}</strong>: ${value}`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 28) + "px");
      })
      .on("mouseleave", () => tooltip.style("display", "none"));
  });

  svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel);

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .text(meta.yLabel);

  const legend = svg.append("g")
    .attr("transform", `translate(0, ${height + margin.bottom + 10})`);

  seriesNames.forEach((key, i) => {
    const g = legend.append("g").attr("transform", `translate(${i * 120}, 0)`);
    g.append("rect").attr("width", 12).attr("height", 12).attr("fill", color(key));
    g.append("text").attr("x", 18).attr("y", 10).text(key).style("font-size", "12px");
  });
};



window.drawLineChartMultipleLines = function(container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  const seriesNames = Object.keys(data[0][meta.seriesKey]);
  const color = d3.scaleOrdinal().domain(seriesNames).range(meta.colors);

  const x = d3.scalePoint()
    .domain(data.map(d => d[meta.labelKey]))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d3.max(seriesNames, key => d[meta.seriesKey][key]))])
    .nice()
    .range([height, 0]);

  const line = d3.line()
    .x(d => x(d.label))
    .y(d => y(d.value));

  const seriesData = seriesNames.map(name => ({
    name,
    values: data.map(d => ({
      label: d[meta.labelKey],
      value: d[meta.seriesKey][name]
    }))
  }));

  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height + 50)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));

  svg.selectAll(".line")
    .data(seriesData)
    .enter().append("path")
    .attr("fill", "none")
    .attr("stroke", d => color(d.name))
    .attr("stroke-width", 2)
    .attr("d", d => line(d.values));

  // Axis Labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel);

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .text(meta.yLabel);

  // Legend at bottom
  const legend = svg.append("g")
    .attr("transform", `translate(0, ${height + margin.bottom + 10})`);

  seriesNames.forEach((key, i) => {
    const g = legend.append("g").attr("transform", `translate(${i * 120}, 0)`);
    g.append("rect").attr("width", 12).attr("height", 12).attr("fill", color(key));
    g.append("text").attr("x", 18).attr("y", 10).text(key).style("font-size", "12px");
  });
};

function drawRadarChart(containerSelector, items, meta) {
  const { width, height, labelKey, seriesKey, colors } = meta;

  d3.select(containerSelector).selectAll('*').remove();

  const svg = d3.select(containerSelector)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const chartGroup = svg.append('g')
    .attr('transform', `translate(${width / 2 - 50}, ${height / 2})`);

  const radius = Math.min(width, height) / 2 - 60;
  const levels = 5;
  const axisNames = Object.keys(items[0][seriesKey]);
  const angleSlice = (2 * Math.PI) / axisNames.length;

  // Scale
  const maxValue = d3.max(items.flatMap(d => Object.values(d[seriesKey])));
  const valueScale = d3.scaleLinear().domain([0, maxValue]).range([0, radius]);

  // Draw grid lines
  for (let level = 1; level <= levels; level++) {
    const levelRadius = radius * (level / levels);
    chartGroup.append("polygon")
      .attr("points", axisNames.map((_, i) => {
        const angle = i * angleSlice - Math.PI / 2;
        return [
          levelRadius * Math.cos(angle),
          levelRadius * Math.sin(angle)
        ].join(",");
      }).join(" "))
      .attr("fill", "none")
      .attr("stroke", "#ccc")
      .attr("stroke-width", 0.5);
  }

  // Draw axes
  axisNames.forEach((axis, i) => {
    const angle = i * angleSlice - Math.PI / 2;
    chartGroup.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", radius * Math.cos(angle))
      .attr("y2", radius * Math.sin(angle))
      .attr("stroke", "#999");

    chartGroup.append("text")
      .attr("x", (radius + 10) * Math.cos(angle))
      .attr("y", (radius + 10) * Math.sin(angle))
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .style("font-size", "11px")
      .text(axis);
  });

  // Draw data polygons
  items.forEach((item, idx) => {
    const coords = axisNames.map((key, i) => {
      const value = item[seriesKey][key];
      const angle = i * angleSlice - Math.PI / 2;
      const r = valueScale(value);
      return [r * Math.cos(angle), r * Math.sin(angle)];
    });

    chartGroup.append("polygon")
      .attr("points", coords.map(d => d.join(",")).join(" "))
      .attr("fill", colors[idx % colors.length])
      .attr("fill-opacity", 0.4)
      .attr("stroke", colors[idx % colors.length])
      .attr("stroke-width", 2);
  });

  // ✅ رسم الـ LEGEND على اليمين خارج الدائرة
  const legendGroup = svg.append("g")
    .attr("transform", `translate(${width - 110}, 40)`);

  items.forEach((item, idx) => {
    const legendItem = legendGroup.append("g")
      .attr("transform", `translate(0, ${idx * 20})`);

    legendItem.append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", colors[idx % colors.length]);

    legendItem.append("text")
      .attr("x", 18)
      .attr("y", 10)
      .text(item[labelKey])
      .style("font-size", "12px")
      .attr("alignment-baseline", "middle");
  });
}



// ✅ Helper Functions for Density
function kernelDensityEstimator(kernel, X) {
  return function (V) {
    return X.map(function (x) {
      return [x, d3.mean(V, v => kernel(x - v))];
    });
  };
}

function kernelEpanechnikov(k) {
  return function (v) {
    return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
  };
}
function drawHistogram(container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  // ⬇️ تجميع كل القيم الرقمية من كل المجموعات
  const allValues = data.flatMap(d => d[meta.valueKey].map(v => v[meta.numericKey]));

  // ⬇️ إعداد مقياس X
  const x = d3.scaleLinear()
    .domain(d3.extent(allValues))
    .nice()
    .range([0, width]);

  // ⬇️ عدد الأعمدة بشكل ذكي حسب عدد القيم
  const binCount = Math.max(5, Math.min(15, Math.round(Math.sqrt(allValues.length))));

  const histogram = d3.histogram()
    .value(d => d)
    .domain(x.domain())
    .thresholds(x.ticks(binCount));

  const bins = histogram(allValues);

  // ⬇️ مقياس Y حسب عدد العناصر في كل bin
  const y = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .nice()
    .range([height, 0]);

  // ⬇️ إنشاء العنصر الرئيسي
  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // ⬇️ رسم الأعمدة
  svg.selectAll("rect")
    .data(bins)
    .enter().append("rect")
    .attr("x", d => x(d.x0) + 1)
    .attr("y", d => y(d.length))
    .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 2))
    .attr("height", d => height - y(d.length))
    .attr("fill", meta.colors[0] || "#59a14f")
    .attr("fill-opacity", 0.6);

  // ⬇️ المحور X
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(binCount));

  // ⬇️ المحور Y بتنسيق أرقام صحيحة
  svg.append("g")
    .call(d3.axisLeft(y).ticks(6).tickFormat(d3.format("d")));

  // ⬇️ تسمية المحور X
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel || "Value");

  // ⬇️ تسمية المحور Y
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .text(meta.yLabel || "Frequency");
}

// ✅ Box Plot
function drawBoxPlot(container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleBand()
    .domain(data.map(d => d[meta.groupKey]))
    .range([0, width])
    .padding(0.4);

  const allValues = data.flatMap(d => d[meta.valueKey].map(v => v[meta.numericKey]));
  const y = d3.scaleLinear()
    .domain(d3.extent(allValues)).nice()
    .range([height, 0]);

  svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y).ticks(6).tickFormat(d3.format("d")));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel || "Group");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .text(meta.yLabel || "Value");

  data.forEach((groupData, i) => {
    const values = groupData[meta.valueKey].map(v => v[meta.numericKey]).sort(d3.ascending);
    const q1 = d3.quantile(values, 0.25);
    const median = d3.quantile(values, 0.5);
    const q3 = d3.quantile(values, 0.75);
    const iqr = q3 - q1;
    const min = Math.max(d3.min(values), q1 - 1.5 * iqr);
    const max = Math.min(d3.max(values), q3 + 1.5 * iqr);

    const cx = x(groupData[meta.groupKey]) + x.bandwidth() / 2;
    const boxWidth = x.bandwidth() * 0.6;

    // Whiskers
    svg.append("line").attr("x1", cx).attr("x2", cx).attr("y1", y(min)).attr("y2", y(max)).attr("stroke", "black");

    // Box
    svg.append("rect")
      .attr("x", cx - boxWidth / 2)
      .attr("y", y(q3))
      .attr("width", boxWidth)
      .attr("height", y(q1) - y(q3))
      .attr("fill", meta.colors[i % meta.colors.length])
      .attr("fill-opacity", 0.6)
      .attr("stroke", "black");

    // Median line
    svg.append("line")
      .attr("x1", cx - boxWidth / 2)
      .attr("x2", cx + boxWidth / 2)
      .attr("y1", y(median))
      .attr("y2", y(median))
      .attr("stroke", "black")
      .attr("stroke-width", 2);
  });
}


// ✅ Density Plot
function drawDensityPlot(container, data, meta) {
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = meta.width - margin.left - margin.right;
  const height = meta.height - margin.top - margin.bottom;

  const svg = d3.select(container).append("svg")
    .attr("width", meta.width)
    .attr("height", meta.height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const allValues = data.flatMap(d => d[meta.valueKey].map(v => v[meta.numericKey]));
  const x = d3.scaleLinear()
    .domain(d3.extent(allValues)).nice()
    .range([0, width]);

  const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60));

  const yMax = d3.max(data, group => d3.max(kde(group[meta.valueKey].map(v => v[meta.numericKey])), d => d[1]));
  const y = d3.scaleLinear().domain([0, yMax]).range([height, 0]);

  svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(x));
  svg.append("g").call(d3.axisLeft(y));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 5)
    .style("text-anchor", "middle")
    .text(meta.xLabel || "Value");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .text(meta.yLabel || "Density");

  data.forEach((group, i) => {
    const values = group[meta.valueKey].map(v => v[meta.numericKey]);
    const density = kde(values);

    svg.append("path")
      .datum(density)
      .attr("fill", "none")
      .attr("stroke", meta.colors[i % meta.colors.length])
      .attr("stroke-width", 2)
      .attr("d", d3.line()
        .curve(d3.curveBasis)
        .x(d => x(d[0]))
        .y(d => y(d[1])));
  });
}


function drawTreeDiagram(containerSelector, data, meta) {
  const { width, height, labelKey, valueKey, xLabel, yLabel, colors } = meta;

  // 1. تنظيف الحاوية
  d3.select(containerSelector).selectAll('*').remove();

  // 2. إنشاء SVG
  const svg = d3.select(containerSelector)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const margin = { top: 30, right: 110, bottom: 30, left: 90 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

  // 3. تحويل البيانات إلى هيكل هرمي
  const root = d3.hierarchy(data, d => d.children)
    .sum(d => d[valueKey]);

  // 4. تخطيط الشجرة
  const treeLayout = d3.tree().size([innerHeight, innerWidth]);
  treeLayout(root);

  // 5. رسم الروابط (الخطوط بين العقد)
  g.selectAll('path.link')
    .data(root.links())
    .enter()
    .append('path')
    .attr('class', 'link')
    .attr('fill', 'none')
    .attr('stroke', '#ccc')
    .attr('stroke-width', 2)
    .attr('d', d3.linkHorizontal()
      .x(d => d.y)
      .y(d => d.x)
    );

  // 6. رسم العقد (الدوائر)
  const node = g.selectAll('g.node')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('class', 'node')
    .attr('transform', d => `translate(${d.y},${d.x})`);

  node.append('circle')
    .attr('r', 6)
    .attr('fill', (d, i) => colors[d.depth % colors.length]);

  // 7. تسميات العقد
  node.append('text')
    .attr('dy', '0.35em')
    .attr('x', d => d.children ? -10 : 10)
    .style('text-anchor', d => d.children ? 'end' : 'start')
    .text(d => d.data[labelKey]);

  // 8. تسمية المحاور (وهمية للعرض فقط)
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    .attr('font-size', '14px')
    .text(`${xLabel} - ${yLabel}`);
}

function drawCirclePacking(containerSelector, data, meta) {
  const { width, height, valueKey, labelKey, colors } = meta;

  // تنظيف الحاوية
  d3.select(containerSelector).selectAll("*").remove();

  // إنشاء SVG
  const svg = d3.select(containerSelector)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // إعداد البيانات الهرمية
  const root = d3.hierarchy(data)
    .sum(d => d[valueKey])
    .sort((a, b) => b.value - a.value);

  // تطبيق التخطيط
  const pack = d3.pack()
    .size([width, height])
    .padding(5);

  const packedRoot = pack(root);

  // رسم الدوائر
  const node = svg.selectAll("g.node")
    .data(packedRoot.descendants())
    .enter()
    .append("g")
    .attr("transform", d => `translate(${d.x - width / 2}, ${d.y - height / 2})`);

  node.append("circle")
    .attr("r", d => d.r)
    .attr("fill", d => colors[d.depth % colors.length])
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5);

  // تسميات
  node.filter(d => !d.children) // فقط للأوراق
    .append("text")
    .text(d => d.data[labelKey])
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .style("font-size", d => `${Math.min(2 * d.r / d.data[labelKey].length, 14)}px`);
}


function drawSunburstChart(containerSelector, data, meta) {
  const { width, height, valueKey, labelKey, colors } = meta;

  // تنظيف الحاوية
  d3.select(containerSelector).selectAll("*").remove();

  const radius = Math.min(width, height) / 2;

  const svg = d3.select(containerSelector)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const root = d3.hierarchy(data)
    .sum(d => d[valueKey])
    .sort((a, b) => b.value - a.value);

  const partition = d3.partition()
    .size([2 * Math.PI, radius]);

  partition(root);

  const arc = d3.arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .innerRadius(d => d.y0)
    .outerRadius(d => d.y1);

  // رسم الشرائح
  svg.selectAll('path')
    .data(root.descendants())
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', d => colors[d.depth % colors.length])
    .attr('stroke', '#fff')
    .attr('stroke-width', 1.5)
    .append("title")
    .text(d => `${d.data[labelKey]}: ${d.value}`);

  // تسميات (اختيارية، لكنها محدودة بسبب المساحة)
  svg.selectAll('text')
    .data(root.descendants().filter(d => d.depth && (d.x1 - d.x0) > 0.03)) // عرض كافٍ
    .enter()
    .append('text')
    .attr('transform', d => {
      const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
      const y = (d.y0 + d.y1) / 2;
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    })
    .attr('dx', '-10')
    .attr('dy', '.35em')
    .style('text-anchor', 'middle')
    .style('font-size', '10px')
    .text(d => d.data[labelKey]);
}

function drawTreemap(containerSelector, data, meta) {
  const { width, height, valueKey, labelKey, colors } = meta;

  // تنظيف الحاوية
  d3.select(containerSelector).selectAll("*").remove();

  // إعداد SVG
  const svg = d3.select(containerSelector)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // إنشاء مجموعة للمربعات
  const rectGroup = svg.append("g");
  const textGroup = svg.append("g"); // ✅ مجموعة منفصلة للنصوص (تكون فوق المستطيلات)

  const root = d3.hierarchy(data)
    .sum(d => d[valueKey] || 0)
    .sort((a, b) => b.value - a.value);

  d3.treemap()
    .size([width, height])
    .paddingInner(1)(root);

  // رسم المستطيلات
  rectGroup.selectAll("rect")
    .data(root.descendants())
    .enter()
    .append("rect")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => colors[d.depth % colors.length])
    .attr("stroke", "#fff");

  // رسم النصوص في طبقة مستقلة فوق كل شيء
  textGroup.selectAll("text")
    .data(root.descendants())
    .enter()
    .append("text")
    .attr("x", d => d.x0 + (d.x1 - d.x0) / 2 * 2 - 96)
    .attr("y", d => d.y0 + (d.y1 - d.y0) / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "middle")
    .text(d => d.data[labelKey])
    .style("fill", "white")
    .style("font-size", "12px")
    .style("pointer-events", "none")
    .style("opacity", d => {
      const boxWidth = d.x1 - d.x0;
      const boxHeight = d.y1 - d.y0;
      const labelLength = (d.data[labelKey] || "").length;
      return (boxWidth > labelLength * 6 && boxHeight > 20) ? 1 : 0;
    });
}




function drawRadialCluster(containerSelector, data, meta) {
  const { width, height, labelKey, colors } = meta;

  d3.select(containerSelector).selectAll("*").remove();

  const radius = Math.min(width, height) / 2;

  const svg = d3.select(containerSelector)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  const root = d3.hierarchy(data);
  const cluster = d3.cluster().size([2 * Math.PI, radius - 50]);

  cluster(root);

  // الروابط
  svg.append("g")
    .selectAll("path")
    .data(root.links())
    .enter()
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "#ccc")
    .attr("d", d => {
      return d3.linkRadial()
        .angle(d => d.x)
        .radius(d => d.y)(d);
    });

  // العقد
  const node = svg.append("g")
    .selectAll("g")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("transform", d => `
      rotate(${(d.x * 180 / Math.PI - 90)})
      translate(${d.y},0)
    `);

  node.append("circle")
    .attr("r", 4)
    .attr("fill", d => colors[d.depth % colors.length]);

  node.append("text")
    .attr("dy", "0.31em")
    .attr("x", d => d.x < Math.PI ? 6 : -6)
    .attr("text-anchor", d => d.x < Math.PI ? "start" : "end")
    .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
    .text(d => d.data[labelKey])
    .style("font-size", "11px");
}

function drawIcicleChart(containerSelector, data, meta) {
  const { width, height, valueKey, labelKey, colors } = meta;

  // تنظيف الحاوية
  d3.select(containerSelector).selectAll("*").remove();

  // إعداد SVG
  const svg = d3.select(containerSelector)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // بناء الهيكل الهرمي
  const root = d3.hierarchy(data)
    .sum(d => d[valueKey])
    .sort((a, b) => b.value - a.value);

  d3.partition()
    .size([width, height])
    (root);

  // رسم المستطيلات
  svg.selectAll("rect")
    .data(root.descendants())
    .enter()
    .append("rect")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => colors[d.depth % colors.length])
    .attr("stroke", "#fff");

  // التسميات (على المستوى الأول فقط لتجنب التزاحم)
  svg.selectAll("text")
    .data(root.descendants().filter(d => d.y1 - d.y0 > 18))
    .enter()
    .append("text")
    .attr("x", d => d.x0 + 4)
    .attr("y", d => d.y0 + 14)
    .text(d => d.data[labelKey])
    .attr("fill", "white")
    .attr("font-size", "12px");
}

// Initial render
renderCategoryButtons();
