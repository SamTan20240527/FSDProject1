WITH cte AS (
SELECT
si.CustomerID,
si.InvoiceDate, 
sil.InvoiceID,
sil.InvoiceLineID,
sil.StockItemID,
sil.Quantity,
sil.UnitPrice
FROM Sales.InvoiceLines sil
LEFT JOIN Sales.Invoices si ON si.InvoiceID = sil.InvoiceID
WHERE si.InvoiceDate BETWEEN '2013-01-01' AND '2014-12-31'
)

SELECT * FROM cte

