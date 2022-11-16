import requests
from bs4 import BeautifulSoup

url = 'https://quotes.toscrape.com/page/'

for page in range(3):
    url = f'{url}{page}'
    response = requests.get(url)
    bs = BeautifulSoup(response.text, "lxml")
    authors = bs.find_all('small', 'author')
    for author in authors:
        print(author.text)
    print('___')
