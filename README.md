# FSDProject1
xxx

## Data_Sales_Invoices
SELECT \
sil.InvoiceID, \
sil.InvoiceLineID, \
sil.StockItemID, \
sil.Quantity, \
sil.UnitPrice, \
CONVERT(varchar(10), si.InvoiceDate, 23) AS InvoiceDate \
FROM Sales.InvoiceLines sil \
LEFT JOIN Sales.Invoices si ON si.InvoiceID = sil.InvoiceID \
ORDER BY sil.InvoiceID, sil.InvoiceLineID




