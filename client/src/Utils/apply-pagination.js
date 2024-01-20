export function applyPagination(documents, page, rowsPerPage) {
  return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

export function applyBookingsPagination(documents, page, rowsPerPage, filterCriteria) {
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  if (Object.keys(filterCriteria).length > 0) {
    page = 0;
  }
  // If no filter criteria is applied, return all documents
  if (Object.keys(filterCriteria).length === 0) {
    return documents.slice(startIndex, endIndex);
  }

  let filteredDocuments = documents.filter((document) => {
    // Iterate over the values of filterCriteria object
    for (const value of Object.values(filterCriteria)) {
      // Check if the document has a property with a matching value
      if (Object.keys(document).includes(value)) {
        return true;
      }
    }

    // If no match is found, exclude the document from the filtered results
    return false;
  });

  return filteredDocuments.slice(startIndex, endIndex);
}