#!/usr/bin/env bash

# View page source
#open "https://codepen.io/thebabydino/embed/dybajpx?height=150&amp;theme-id=1&amp;slug-hash=dybajpx&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20structure%20%26%20layout&amp;name=cp_embed_1"
#open "https://codepen.io/thebabydino/embed/gOYqdEd?height=150&amp;theme-id=1&amp;slug-hash=gOYqdEd&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20basic%20look&amp;name=cp_embed_2"
#open "https://codepen.io/thebabydino/embed/ExxOVqR?height=150&amp;theme-id=1&amp;slug-hash=ExxOVqR&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20functionality&amp;name=cp_embed_3"
#open "https://codepen.io/thebabydino/embed/BaaGjzL?height=190&amp;theme-id=1&amp;slug-hash=BaaGjzL&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20display%20output&amp;name=cp_embed_4"
#open "https://codepen.io/thebabydino/embed/QWWJygq?height=170&amp;theme-id=1&amp;slug-hash=QWWJygq&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20prettify%20output&amp;name=cp_embed_5"
#open "https://codepen.io/thebabydino/embed/pooQgKV?height=170&amp;theme-id=1&amp;slug-hash=pooQgKV&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20focus%20styles&amp;name=cp_embed_6"
#open "https://codepen.io/thebabydino/embed/oNvdprY?height=515&amp;theme-id=1&amp;slug-hash=oNvdprY&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=Setting%20width%20to%20absolute%20value%20of%20difference%20between%20two%20custom%20properties&amp;name=cp_embed_7"
open "https://codepen.io/thebabydino/embed/wvvQopE?height=170&amp;theme-id=1&amp;slug-hash=wvvQopE&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20fill%20size%20via%20width%2F%20min-width&amp;name=cp_embed_8"
open "https://codepen.io/thebabydino/embed/XWWygeg?height=510&amp;theme-id=1&amp;slug-hash=XWWygeg&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=Set%20width%20to%20%7Ca%20-%20b%7C%20and%20left%20to%20min(a%2C%20b)&amp;name=cp_embed_9"
open "https://codepen.io/thebabydino/embed/KKKrXQE?height=170&amp;theme-id=1&amp;slug-hash=KKKrXQE&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20fill%20size%20via%202%20pseudos&amp;name=cp_embed_10"
open "https://codepen.io/thebabydino/embed/RwwERBq?height=225&amp;theme-id=1&amp;slug-hash=RwwERBq&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20end%20issue%20highlight&amp;name=cp_embed_11"
open "https://codepen.io/thebabydino/embed/bGGJpjq?height=705&amp;theme-id=1&amp;slug-hash=bGGJpjq&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=actual%20thumb%20range%20of%20motion&amp;name=cp_embed_12"
open "https://codepen.io/thebabydino/embed/NWWerZG?height=225&amp;theme-id=1&amp;slug-hash=NWWerZG&amp;default-tab=result&amp;user=thebabydino&amp;embed-version=2&amp;pen-title=2%20handle%20slider%20-%20end%20issue%20fix&amp;name=cp_embed_13"

# Then:
find . -name '*.html' -type f -print -exec tidy --drop-empty-elements no -mq '{}' \;
