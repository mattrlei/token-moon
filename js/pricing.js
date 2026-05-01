var P={haiku35:{i:.80,o:4.00,lbl:'Haiku 3.5',prov:'ant'},haiku45:{i:1.00,o:5.00,lbl:'Haiku 4.5',prov:'ant'},sonnet:{i:3.00,o:15.00,lbl:'Sonnet 4.6',prov:'ant'},opus:{i:5.00,o:25.00,lbl:'Opus 4.6',prov:'ant'},gpt41mini:{i:.40,o:1.60,lbl:'GPT-4.1 mini',prov:'oai'},gpt4omini:{i:.15,o:.60,lbl:'GPT-4o mini',prov:'oai'},gpt4o:{i:2.50,o:10.00,lbl:'GPT-4o',prov:'oai'},gpt41:{i:2.00,o:8.00,lbl:'GPT-4.1',prov:'oai'}};
var CACHE={ant:.90,oai:.50};
var LLM_T=['@n8n/n8n-nodes-langchain.openai','@n8n/n8n-nodes-langchain.lmchatanthropic','@n8n/n8n-nodes-langchain.lmchatopenai','@n8n/n8n-nodes-langchain.anthropic','@n8n/n8n-nodes-langchain.agent','@n8n/n8n-nodes-langchain.openaiassistant','n8n-nodes-base.openai'];
var LOOP_T=['n8n-nodes-base.splitinbatches','n8n-nodes-base.splitout'];
