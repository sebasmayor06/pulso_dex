import React from 'react';

export default function TableComponent() {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Objetivo
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Utilidad
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Administracion
          </th>
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Ecommerce
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Participación
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            40%
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            30%
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            30%
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Ganancia
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            40%
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            30%
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            30%
          </td>
        </tr>
      </tbody>
    </table>
  );
}