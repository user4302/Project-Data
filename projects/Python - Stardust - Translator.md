Project Title: **Stardust: German to English Book Translation Pipeline**

**Type:** Personal

**Short Description:**
AI-powered translation system for converting German literature into English while preserving literary quality, tone, and cultural nuance. The project solves the challenge of translating large German books by implementing intelligent chunking, batch processing with Mistral-7B AI model, and automated workflow management to maintain narrative coherence and literary style throughout the translation process.

**My Role & Contribution:**
I designed and implemented a complete end-to-end translation pipeline that processes German literature through intelligent text chunking, AI-powered translation using text-generation-webui with Mistral-7B-Instruct model, and automated recombination of translated content. I created four core Python scripts for API testing, text splitting, batch translation, and chapter reconstruction, along with comprehensive documentation and configuration management.

**Key Technologies/Skills:**
- Python 3.8+ with requests and python-dotenv
- text-generation-webui AI backend integration
- Mistral-7B-Instruct-v0.3.Q5_K_M.gguf model (4.37GB quantized)
- OpenAI-compatible API implementation
- Markdown text processing and chunking algorithms
- File system management and batch processing
- Literary translation prompt engineering
- CLI tool development with argparse

**Impact/Results:**
- Successfully processed multiple German books with 23+ chapters each
- Maintained literary quality and narrative coherence through intelligent chunking (5000 character segments)
- Achieved translation speeds of 10-30 tokens/second on modern GPU
- Implemented dry-run mode for preview and quality control before full processing
- Created scalable pipeline supporting multiple books and configurable parameters

**Visuals Needed:**
- Pipeline architecture diagram showing text flow from German source through chunking, AI translation, to English output
- CLI output screenshots showing batch translation progress
- Before/after comparison of German vs translated English text samples
- File structure visualization of books/chunks/chapters organization
- API configuration and model loading interface screenshots

**Links:**
- [GitLab](https://gitlab.com/user4302_Projects/coding/python/stardust-books)
- [text-generation-webui](https://github.com/oobabooga/text-generation-webui)
- [Mistral Model](https://huggingface.co/MaziyarPanahi/Mistral-7B-Instruct-v0.3-GGUF)
- [Netlify](https://user4302-stardust.netlify.app/)
- [Reader](https://gitlab.com/user4302_Projects/coding/next-js/stardust-reader)

**Tags:**
- Python
- AI
- Translation
- German
- English
- Literature
- Mistral-7B
- text-generation-webui
- OpenAI-API
- Markdown
- Chunking
- Batch-Processing
- CLI
- argparse
- File-System
- Prompt-Engineering
- Large-Language-Model