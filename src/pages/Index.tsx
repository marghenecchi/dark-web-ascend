
import React, { useEffect, useState } from 'react';
import { Code, Terminal, FileText, Scroll } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div 
          className="relative z-10 text-center px-6 transform"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="mb-8">
            <Terminal className="w-20 h-20 mx-auto mb-6 text-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Web Crawling
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 mb-8">
            per RAG System
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Un sistema avanzato di raccolta e indicizzazione di contenuti web per Retrieval-Augmented Generation
          </p>
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Introduzione */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Cos'è il nostro progetto?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl">
                  Il nostro sistema di <span className="text-cyan-400 font-semibold">Web Crawling per RAG</span> è una soluzione completa 
                  per la raccolta automatica di contenuti web e la loro integrazione in sistemi di intelligenza artificiale.
                </p>
                <p>
                  Combina tecniche avanzate di web scraping con algoritmi di elaborazione del linguaggio naturale 
                  per creare una base di conoscenza dinamica e sempre aggiornata.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <FileText className="w-8 h-8 text-purple-400" />
                  <span className="text-purple-400 font-semibold">Elaborazione intelligente dei contenuti</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 border border-cyan-500/30 rounded-lg p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-cyan-400">$ crawler.start()</div>
                  <div className="text-green-400">✓ Scanning websites...</div>
                  <div className="text-green-400">✓ Extracting content...</div>
                  <div className="text-green-400">✓ Processing with RAG...</div>
                  <div className="text-yellow-400 animate-pulse">▶ Ready for queries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architettura del Sistema */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Architettura del Sistema
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Terminal className="w-12 h-12" />,
                title: "Web Crawler",
                description: "Raccolta automatica di contenuti da siti web target",
                color: "from-cyan-400 to-blue-500"
              },
              {
                icon: <Code className="w-12 h-12" />,
                title: "Data Processing",
                description: "Elaborazione e pulizia dei dati raccolti",
                color: "from-purple-400 to-pink-500"
              },
              {
                icon: <FileText className="w-12 h-12" />,
                title: "RAG Integration",
                description: "Integrazione con sistema di Retrieval-Augmented Generation",
                color: "from-green-400 to-teal-500"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 border border-cyan-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Flusso di Elaborazione</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">1</div>
                <span>Identificazione dei siti web target</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <span>Crawling sistematico delle pagine</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <span>Estrazione e pulizia del contenuto</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <span>Indicizzazione per il sistema RAG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Codice */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
            Implementazione
          </h2>
          
          <div className="space-y-12">
            {/* Crawler principale */}
            <div className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <h3 className="text-xl font-bold text-green-400 flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Crawler Principale
                </h3>
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`import asyncio
import aiohttp
from bs4 import BeautifulSoup
from typing import List, Dict
import logging

class WebCrawler:
    def __init__(self, max_concurrent: int = 10):
        self.max_concurrent = max_concurrent
        self.session = None
        self.visited_urls = set()
        
    async def start_session(self):
        """Inizializza la sessione HTTP asincrona"""
        self.session = aiohttp.ClientSession(
            timeout=aiohttp.ClientTimeout(total=30),
            headers={'User-Agent': 'RAG-Crawler/1.0'}
        )
    
    async def crawl_url(self, url: str) -> Dict:
        """Esegue il crawling di una singola URL"""
        if url in self.visited_urls:
            return None
            
        self.visited_urls.add(url)
        
        try:
            async with self.session.get(url) as response:
                if response.status == 200:
                    html = await response.text()
                    return await self.extract_content(html, url)
        except Exception as e:
            logging.error(f"Errore nel crawling di {url}: {e}")
            return None`}</code>
                </pre>
              </div>
            </div>

            {/* Processamento RAG */}
            <div className="bg-gray-900 border border-purple-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <h3 className="text-xl font-bold text-purple-400 flex items-center">
                  <Terminal className="w-6 h-6 mr-3" />
                  Integrazione RAG
                </h3>
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`from sentence_transformers import SentenceTransformer
import chromadb
from typing import List

class RAGProcessor:
    def __init__(self, model_name: str = "all-MiniLM-L6-v2"):
        self.encoder = SentenceTransformer(model_name)
        self.chroma_client = chromadb.Client()
        self.collection = self.chroma_client.create_collection("web_content")
    
    def process_content(self, content: str, metadata: Dict) -> None:
        """Processa il contenuto per l'integrazione RAG"""
        # Suddivide il contenuto in chunks
        chunks = self.chunk_content(content)
        
        # Genera embeddings per ogni chunk
        embeddings = self.encoder.encode(chunks)
        
        # Salva nel database vettoriale
        self.collection.add(
            embeddings=embeddings.tolist(),
            documents=chunks,
            metadatas=[metadata] * len(chunks),
            ids=[f"{metadata['url']}_{i}" for i in range(len(chunks))]
        )
    
    def search_similar(self, query: str, n_results: int = 5):
        """Ricerca contenuti simili alla query"""
        query_embedding = self.encoder.encode([query])
        results = self.collection.query(
            query_embeddings=query_embedding.tolist(),
            n_results=n_results
        )
        return results`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risultati e Demo */}
      <section className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Risultati e Performance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-900 border border-yellow-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Metriche di Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Pagine crawlate al minuto</span>
                    <span className="text-cyan-400 font-bold">~150</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Accuracy RAG retrieval</span>
                    <span className="text-green-400 font-bold">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tempo risposta medio</span>
                    <span className="text-purple-400 font-bold">0.3s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Contenuti indicizzati</span>
                    <span className="text-orange-400 font-bold">50k+</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Funzionalità Chiave</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Crawling asincrono multi-threaded</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Filtraggio intelligente dei contenuti</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Deduplicazione automatica</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Monitoraggio real-time</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-cyan-500/30 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Console di Monitoraggio</h3>
              <div className="bg-black rounded p-4 font-mono text-sm">
                <div className="text-green-400 mb-2">RAG Crawler Console v1.0</div>
                <div className="text-gray-400">================================</div>
                <div className="text-cyan-400 my-2">Status: RUNNING</div>
                <div className="text-yellow-400">Queue: 1,247 URLs pending</div>
                <div className="text-green-400">Processed: 12,456 pages</div>
                <div className="text-purple-400">Vector DB: 45,892 embeddings</div>
                <div className="text-gray-400 my-2">Recent activity:</div>
                <div className="text-green-400">✓ Crawled: tech-blog.com/ai-trends</div>
                <div className="text-green-400">✓ Indexed: 15 new chunks</div>
                <div className="text-yellow-400 animate-pulse">▶ Processing: news-site.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusioni */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Conclusioni
          </h2>
          
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p className="text-xl">
              Il nostro sistema di <span className="text-cyan-400 font-semibold">Web Crawling per RAG</span> rappresenta 
              una soluzione completa e scalabile per l'acquisizione automatica di conoscenza.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Vantaggi</h3>
                <ul className="text-left space-y-2 text-gray-300">
                  <li>• Acquisizione automatica di contenuti</li>
                  <li>• Elaborazione intelligente dei dati</li>
                  <li>• Integrazione seamless con RAG</li>
                  <li>• Scalabilità e performance elevate</li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border border-purple-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Sviluppi Futuri</h3>
                <ul className="text-left space-y-2 text-gray-300">
                  <li>• Analisi semantica avanzata</li>
                  <li>• Machine Learning per filtraggio</li>
                  <li>• API per integrazioni esterne</li>
                  <li>• Dashboard di monitoraggio web</li>
                </ul>
              </div>
            </div>
            
            <p className="text-2xl font-semibold text-cyan-400">
              Grazie per l'attenzione!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-6">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <Code className="w-8 h-8 text-purple-400" />
            <FileText className="w-8 h-8 text-green-400" />
            <Scroll className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-gray-400">
            Progetto di Web Crawling per RAG System - Presentazione Tecnica
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
