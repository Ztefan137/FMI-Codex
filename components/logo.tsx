import React from 'react';

export default function FMICodexTextLogo({ size = 20, className = '' }) {
  // Shared styling for both slashes to guarantee exact visual consistency
  const slashStyle = {
    fontSize: `${size * 0.9}px`,
    fontWeight: 500,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    color: '#0077B6',
    opacity: 0.6,
  };

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        cursor: 'pointer',
        userSelect: 'none',
        lineHeight: 1,
      }}
    >
      {/* Relative path dot */}
      <span
        style={{
          fontSize: `${size * 0.9}px`,
          fontWeight: 700,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          color: '#0077B6',
          opacity: 0.6,
        }}
      >
        .
      </span>

      {/* First Slash */}
      <span style={{ ...slashStyle, marginRight: `-${size * 0.04}px` }}>
        /
      </span>

      {/* FMI: Solid academic navy */}
      <span
        style={{
          fontSize: `${size}px`,
          fontWeight: 900,
          letterSpacing: '-0.05em',
          color: '#0B2545',
        }}
      >
        FMI
      </span>

      {/* Second Slash (Identical font & weight) */}
      <span
        style={{
          ...slashStyle,
          margin: `0 -${size * 0.04}px`,
        }}
      >
        /
      </span>

      {/* Codex: Monospace cyan gradient */}
      <span
        style={{
          fontSize: `${size * 0.95}px`,
          fontWeight: 600,
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          letterSpacing: '-0.04em',
          background: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        codex
      </span>
    </div>
  );
}