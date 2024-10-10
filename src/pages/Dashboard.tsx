import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';

interface Product {
  id: number;
  name: string;
  yearSales: number;
  originalPrice: number;
  discountedPrice: number;
  cost: number;
  margin: number;
}

interface ChartData {
  date: string;
  totalSales: number;
  discountedSales: number;
  totalCost: number;
  totalMargin: number;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    // TODO: Fetch real data from Shopee API
    const mockProducts: Product[] = [
      { id: 1, name: 'Product A', yearSales: 1000, originalPrice: 50, discountedPrice: 45, cost: 30, margin: 15 },
      { id: 2, name: 'Product B', yearSales: 800, originalPrice: 40, discountedPrice: 35, cost: 25, margin: 10 },
      { id: 3, name: 'Product C', yearSales: 1200, originalPrice: 60, discountedPrice: 55, cost: 35, margin: 20 },
    ];
    setProducts(mockProducts);

    const mockChartData: ChartData[] = [
      { date: '2023-03-01', totalSales: 3000, discountedSales: 2700, totalCost: 1800, totalMargin: 900 },
      { date: '2023-03-02', totalSales: 3200, discountedSales: 2880, totalCost: 1920, totalMargin: 960 },
      { date: '2023-03-03', totalSales: 2800, discountedSales: 2520, totalCost: 1680, totalMargin: 840 },
      { date: '2023-03-04', totalSales: 3500, discountedSales: 3150, totalCost: 2100, totalMargin: 1050 },
      { date: '2023-03-05', totalSales: 3100, discountedSales: 2790, totalCost: 1860, totalMargin: 930 },
    ];
    setChartData(mockChartData);
  }, []);

  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    
    // Products sheet
    const productsWS = XLSX.utils.json_to_sheet(products);
    XLSX.utils.book_append_sheet(wb, productsWS, "Products");
    
    // Chart data sheet
    const chartWS = XLSX.utils.json_to_sheet(chartData);
    XLSX.utils.book_append_sheet(wb, chartWS, "Daily Data");
    
    XLSX.writeFile(wb, "shopee_data_export.xlsx");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Shopee Price Management Dashboard</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Product Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Name', '1-Year Sales', 'Original Price', 'Discounted Price', 'Cost', 'Margin'].map((header) => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.yearSales}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${product.originalPrice}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${product.discountedPrice}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${product.cost}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${product.margin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Daily Sales Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" allowDuplicatedCategory={false} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="totalSales" stroke="#8884d8" name="Total Sales" />
            <Line type="monotone" dataKey="discountedSales" stroke="#82ca9d" name="Discounted Sales" />
            <Line type="monotone" dataKey="totalCost" stroke="#ffc658" name="Total Cost" />
            <Line type="monotone" dataKey="totalMargin" stroke="#ff7300" name="Total Margin" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={exportToExcel}
        className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Download className="mr-2 h-5 w-5" />
        Export to Excel
      </button>
    </div>
  );
};

export default Dashboard;