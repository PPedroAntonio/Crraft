<?php
// URL of the web page you want to scrape
$url = 'https://www.example.com'; // Replace this with any test URL

// Fetch the content from the URL
$html = file_get_contents($url);

// Check if the content was successfully retrieved
if ($html === false) {
    echo "Failed to retrieve content from the URL.";
    exit;
}

// Create a new DOMDocument
$dom = new DOMDocument();

// Suppress errors due to malformed HTML and load the content
libxml_use_internal_errors(true);
$dom->loadHTML($html);
libxml_clear_errors();

// Create a new DOMXPath to query the DOM
$xpath = new DOMXPath($dom);

// Example: Find all elements with class name 'item' (adjust XPath query as needed)
$items = $xpath->query("//div[contains(@class, 'item')]");

// Check if items were found
if ($items->length > 0) {
    foreach ($items as $item) {
        // Extract the text content or attribute of each item
        echo "Item: " . $item->nodeValue . "<br>";
    }
} else {
    echo "No items found.";
}
?>
