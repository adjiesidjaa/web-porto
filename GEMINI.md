# Workspace Rules: Mandatory RTK Usage

All terminal, shell, and CLI operations in this repository MUST be executed through RTK (Rust Token Killer) proxy for token optimization and execution safety.

## Enforcement Guidelines
1. Never run raw commands such as `git`, `npm`, `npx`, `pnpm`, `cargo`, `gh`, `ls`.
2. Always prefix commands with `rtk`:
   - `rtk git status`, `rtk git diff`, `rtk git log`
   - `rtk npm run dev`, `rtk npm run build`, `rtk npm run lint`
   - `rtk npx ...`, `rtk pnpm ...`
   - `rtk ls ...`
3. Meta commands:
   - `rtk gain`
   - `rtk gain --history`
   - `rtk proxy <cmd>` (when debugging raw output without filtering)
