import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Mail, Terminal, Zap, ShieldCheck, ChevronDown, Code2, Server, Cloud, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

const CODE_SNIPPETS = {
  dotnet: {
    filename: 'PaymentSettlementEngine.cs',
    language: 'C# / .NET 8',
    icon: <Server className="w-4 h-4 text-blue-400" />,
    code: `// High-Throughput Batch Settlement Engine (.NET 8)
public async Task<SettlementResult> ProcessBatchAsync(BatchRequest request, CancellationToken ct)
{
    using var transaction = await _dbContext.Database.BeginTransactionAsync(ct);
    var pipeline = _channel.Reader.ReadAllAsync(ct);
    
    await Parallel.ForEachAsync(pipeline, new ParallelOptions 
    { 
        MaxDegreeOfParallelism = Environment.ProcessorCount * 2 
    }, async (tx, token) => 
    {
        await _paymentService.SettleTransactionAsync(tx, token);
        _metrics.Increment("settlement.success");
    });
    
    return new SettlementResult { Status = SettlementStatus.Completed, LatencyMs = 12 };
}`
  },
  python: {
    filename: 'DataScraperEngine.py',
    language: 'Python 3.10',
    icon: <Code2 className="w-4 h-4 text-emerald-400" />,
    code: `# Real-Time Data Scraping & Alert Pipeline
async def scrape_and_dispatch(target_urls: list[str]) -> BatchSummary:
    async with aiohttp.ClientSession(timeout=ClientTimeout(total=10)) as session:
        tasks = [fetch_and_parse(session, url) for url in target_urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
    valid_data = [r for r in results if not isinstance(r, Exception)]
    await redis_cache.set_batch("latest_feed", valid_data, ttl=300)
    return BatchSummary(processed=len(valid_data), failed=len(results) - len(valid_data))`
  },
  cloud: {
    filename: 'ECSClusterDeploy.tf',
    language: 'Terraform / AWS',
    icon: <Cloud className="w-4 h-4 text-cyan-400" />,
    code: `# Production AWS ECS Fargate Cluster Infrastructure
resource "aws_ecs_service" "backend_api" {
  name            = "febrian-backend-prod"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 4
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = module.vpc.private_subnets
    security_groups  = [aws_security_group.api.id]
    assign_public_ip = false
  }
}`
  }
};

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dotnet' | 'python' | 'cloud'>('dotnet');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Subtle Grid Ambient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Top Status Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-xs font-mono backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-200">Senior Software Engineer</span>
          </motion.div>
        </div>

        {/* Main Grid: Info Left, Interactive Terminal Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column: Heading & Bio */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              Hi, I'm <span className="text-white underline decoration-blue-500 decoration-4 underline-offset-8">{PORTFOLIO_DATA.personal.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-4"
            >
              Engineering scalable enterprise APIs, payment gateway integrations, and reliable data pipelines across <span className="text-blue-400 font-semibold font-mono">.NET 8, C#, Java, Python, and SQL</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl"
            >
              {PORTFOLIO_DATA.personal.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              {/* WhatsApp Direct */}
              <a
                href={PORTFOLIO_DATA.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat WhatsApp</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              {/* Download Real CV */}
              <a
                href={PORTFOLIO_DATA.personal.cvFileUrl}
                download="CV_Muhammad_Febrian_Maulana_2026.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-1">
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Handcrafted Engineering Code Snippet Terminal */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-slate-800 bg-[#090D16] shadow-2xl overflow-hidden text-left"
            >
              {/* Terminal Window Top Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>febrian-engineering-core</span>
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700 transition-colors"
                  title="Copy code"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex border-b border-slate-800/80 bg-slate-950/60 px-2 pt-2 gap-1 overflow-x-auto">
                {(['dotnet', 'python', 'cloud'] as const).map((tabKey) => {
                  const item = CODE_SNIPPETS[tabKey];
                  const isActive = activeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-t-lg text-xs font-mono transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-[#090D16] text-white border-t-2 border-blue-500 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                      }`}
                    >
                      {item.icon}
                      <span>{item.filename}</span>
                    </button>
                  );
                })}
              </div>

              {/* Terminal Code Viewport */}
              <div className="p-4 overflow-x-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[300px]">
                <div className="text-slate-500 mb-2">// Language: {CODE_SNIPPETS[activeTab].language}</div>
                <pre className="text-blue-300 whitespace-pre font-mono selection:bg-blue-600 selection:text-white">
                  <code>{CODE_SNIPPETS[activeTab].code}</code>
                </pre>
              </div>

              {/* Terminal Footer Info Bar */}
              <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Build: Passed (0.02s)</span>
                </div>
                <span>UTF-8 • LF</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Key Metrics Cards Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {PORTFOLIO_DATA.personal.metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 text-left hover:border-blue-500/40 transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                  {metric.label}
                </div>
                <div className="text-slate-600 group-hover:text-blue-400 transition-colors">
                  {index === 0 ? <Zap className="w-5 h-5" /> : index === 1 ? <ShieldCheck className="w-5 h-5" /> : <Terminal className="w-5 h-5" />}
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-slate-400 leading-snug">
                {metric.highlight}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Scroll Down Hint */}
      <motion.a
        href="#skills"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12 text-slate-500 hover:text-blue-400 transition-colors flex flex-col items-center gap-1 cursor-pointer"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-blue-400" />
      </motion.a>

    </section>
  );
};

