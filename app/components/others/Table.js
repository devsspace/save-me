export const Table = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              {children}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TableHead = ({ headItems }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {headItems.map((item) => (
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export const TableBody = ({children}) => {
  return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
}

export const TD = ({children}) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {children}
    </td>
  )
}

export const TD2 = ({image, line1, line2}) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img
            className="h-10 w-10 rounded-full"
            src={image}
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{line1}</div>
          <div className="text-sm text-gray-500">{line2}</div>
        </div>
      </div>
    </td>
  )
}
