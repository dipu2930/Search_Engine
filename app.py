from flask import Flask, render_template, request
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Sample data (replace with your actual data source)
documents = [
    "Python is a popular programming language",
    "Search engines use algorithms to retrieve information",
    "Python can be used to create search engines",
    "Natural language processing is key to building search systems",
    "The TF-IDF method is useful in information retrieval"
]

# Initialize TF-IDF Vectorizer
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(documents)

def search_documents(query):
    # Transform the query to TF-IDF
    query_vector = vectorizer.transform([query])
    cosine_similarities = cosine_similarity(query_vector, tfidf_matrix).flatten()
    relevant_docs = cosine_similarities.argsort()[::-1]

    # Collect results with non-zero similarity scores
    results = []
    for idx in relevant_docs:
        if cosine_similarities[idx] > 0:
            results.append((documents[idx], cosine_similarities[idx]))
    return results

@app.route('/', methods=['GET', 'POST'])
def index():
    query = ""
    results = []
    if request.method == 'POST':
        query = request.form['query']
        results = search_documents(query)
    return render_template('index.html', query=query, results=results)

if __name__ == '__main__':
    app.run(debug=True)
