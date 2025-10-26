# 🎬 AI Video Agent

An autonomous AI agent that generates video scripts, enhances them with advanced AI, creates videos, and automatically posts them to YouTube.

## 🚀 Live Demo

**[View Live Application](https://agentic-16b67388.vercel.app)**

## ✨ Features

- **📝 Script Generation**: AI-powered script generation using OpenAI/Anthropic
- **✨ AI Enhancement**: Scripts are refined and optimized for engagement
- **🎥 Video Creation**: Automatic video generation with voiceover and visuals
- **📤 YouTube Upload**: Direct posting to YouTube with metadata
- **📊 Real-time Progress**: Live streaming updates during the generation process

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **AI Integration**: OpenAI API / Anthropic Claude
- **Video Processing**: Web-based video generation
- **YouTube API**: Google APIs for video upload
- **Deployment**: Vercel

## 🔧 Setup

### Prerequisites

- Node.js 18+
- OpenAI API key or Anthropic API key
- Google OAuth credentials for YouTube upload (optional)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```bash
OPENAI_API_KEY=your_openai_api_key
# OR
ANTHROPIC_API_KEY=your_anthropic_api_key

# Optional: For YouTube upload
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REFRESH_TOKEN=your_google_refresh_token
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## 📖 How It Works

1. **User Input**: Enter a video topic
2. **Script Generation**: AI generates an engaging script
3. **Enhancement**: Script is refined for better storytelling
4. **Video Creation**: Video is generated with voiceover and visuals
5. **YouTube Upload**: Video is automatically posted to YouTube

## 🎯 Usage

1. Visit the application
2. Enter a topic (e.g., "5 Amazing Facts About Space")
3. Click "Generate & Post Video"
4. Watch real-time progress updates
5. Get the YouTube video URL when complete

## 🔐 API Configuration

### Demo Mode

The application works in demo mode without API keys, generating sample scripts and simulated videos.

### Production Mode

For full functionality:

1. **OpenAI Setup**: Add `OPENAI_API_KEY` to use GPT-4 for script generation
2. **YouTube Setup**:
   - Create a Google Cloud project
   - Enable YouTube Data API v3
   - Create OAuth 2.0 credentials
   - Generate a refresh token
   - Add credentials to environment variables

## 🚀 Deployment

### Deploy to Vercel

```bash
vercel deploy --prod
```

Or use the Vercel dashboard:
1. Import your GitHub repository
2. Add environment variables
3. Deploy

## 📝 Features in Detail

### Script Generation
- AI-powered content creation
- Topic-based script writing
- Optimized for 60-90 second videos
- Engaging hooks and calls-to-action

### AI Enhancement
- Improved storytelling flow
- Better hooks and transitions
- Optimized pacing instructions
- Enhanced engagement elements

### Video Creation
- Text-to-speech voiceover
- Visual scene generation
- Professional transitions
- Customizable branding

### YouTube Integration
- Automated upload
- Metadata optimization
- Thumbnail generation
- SEO-friendly descriptions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🐛 Known Limitations

- Demo mode uses simulated video generation
- YouTube upload requires OAuth setup
- Video generation is simplified for web deployment
- For full video processing, consider server-side implementation

## 🔮 Future Enhancements

- [ ] Advanced video editing features
- [ ] Multiple AI model support
- [ ] Template library
- [ ] Batch video generation
- [ ] Analytics dashboard
- [ ] Multi-platform posting (TikTok, Instagram)
- [ ] Custom branding options
- [ ] Voice cloning support

## 📞 Support

For issues and questions, please open a GitHub issue.

---

Built with ❤️ using Next.js and AI
