import React, { useState } from 'react';

export default function RecapAIApp() {
  // Media State
  const [title, setTitle] = useState('');
  
  // AI Editing Feature States
  const [videoSpeed, setVideoSpeed] = useState('1.0'); 
  const [enableMirror, setEnableMirror] = useState(false);
  const [enableFreeze, setEnableFreeze] = useState(false);
  const [addFrames, setAddFrames] = useState(false);
  
  // Format / Output States
  const [aspectRatio, setAspectRatio] = useState('16:9'); 
  const [autoSubtitles, setAutoSubtitles] = useState(true);
  const [autoBgm, setAutoBgm] = useState(true);

  const handleGenerateRecap = () => {
    const payload = {
      title,
      editingRules: {
        speedStrategy: videoSpeed,
        mirrorClips: enableMirror,
        smartFreeze: enableFreeze,
        cinematicFrames: addFrames,
      },
      output: {
        aspectRatio,
        autoSubtitles,
        autoBgm
      }
    };
    console.log("Sending configuration to AI Editing Backend:", payload);
    alert("Configuration saved! Payload logged to console.");
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '800', margin: '0 0 4px 0', color: '#111' }}>RecapAI Pro</h1>
        <p style={{ color: '#666', margin: '0' }}>Automated AI Movie Recap & Video Editor</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Section 1: Media Inputs */}
        <div>
          <h2 style={{ fontSize: '12px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>1. Source Assets</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ border: '2px dashed #ddd', borderRadius: '12px', padding: '20px', textAlign: 'center', backgroundColor: '#fafafa' }}>
              <p style={{ margin: '0', fontWeight: '600', fontSize: '14px', color: '#333' }}>Drop Full Movie File</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#999' }}>MP4, MKV up to 5GB</p>
            </div>
            <div style={{ border: '2px dashed #ddd', borderRadius: '12px', padding: '20px', textAlign: 'center', backgroundColor: '#fafafa' }}>
              <p style={{ margin: '0', fontWeight: '600', fontSize: '14px', color: '#333' }}>Drop Voiceover File(s)</p>
              <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#999' }}>MP3, WAV matching script</p>
            </div>
          </div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', marginTop: '16px', border: '1px solid #ddd', borderRadius: '8px', padding: '12px', boxSizing: 'border-box', fontSize: '14px' }}
            placeholder="Enter Video Project Title"
          />
        </div>

        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '0' }} />

        {/* Section 2: Automated Editing Mechanics */}
        <div>
          <h2 style={{ fontSize: '12px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>2. AI Editing Style & Modifiers</h2>
          <div style={{ backgroundColor: '#fafafa', borderRadius: '12px', padding: '16px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <p style={{ margin: '0', fontWeight: '500', fontSize: '14px', color: '#333' }}>Pacing & Speed Mode</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#999' }}>Control movie speed matching your narration.</p>
              </div>
              <select 
                value={videoSpeed} 
                onChange={(e) => setVideoSpeed(e.target.value)}
                style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: '#fff', fontSize: '14px' }}
              >
                <option value="1.0">Standard (1.0x)</option>
                <option value="dynamic">Smart Dynamic (Fast-forward fluff)</option>
                <option value="fast">High Energy (1.25x - 1.5x)</option>
                <option value="slow">Dramatic Slow-Mo cuts</option>
              </select>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              <button 
                onClick={() => setEnableMirror(!enableMirror)}
                style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left', cursor: 'pointer', backgroundColor: enableMirror ? '#111' : '#fff', color: enableMirror ? '#fff' : '#333' }}
              >
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Mirror</div>
                <div style={{ fontSize: '10px', opacity: '0.7', marginTop: '2px' }}>Flip horizontal</div>
              </button>

              <button 
                onClick={() => setEnableFreeze(!enableFreeze)}
                style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left', cursor: 'pointer', backgroundColor: enableFreeze ? '#111' : '#fff', color: enableFreeze ? '#fff' : '#333' }}
              >
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Freeze</div>
                <div style={{ fontSize: '10px', opacity: '0.7', marginTop: '2px' }}>Smart pause</div>
              </button>

              <button 
                onClick={() => setAddFrames(!addFrames)}
                style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'left', cursor: 'pointer', backgroundColor: addFrames ? '#111' : '#fff', color: addFrames ? '#fff' : '#333' }}
              >
                <div style={{ fontSize: '14px', fontWeight: '600' }}>Frames</div>
                <div style={{ fontSize: '10px', opacity: '0.7', marginTop: '2px' }}>Edge borders</div>
              </button>
            </div>

          </div>
        </div>

        <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '0' }} />

        {/* Section 3: Output Settings */}
        <div>
          <h2 style={{ fontSize: '12px', fontWeight: '600', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>3. Layout & Format</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px' }}>
            <button onClick={() => setAspectRatio('16:9')} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', backgroundColor: aspectRatio === '16:9' ? '#111' : '#fff', color: aspectRatio === '16:9' ? '#fff' : '#333' }}>16:9 YT</button>
            <button onClick={() => setAspectRatio('9:16')} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', backgroundColor: aspectRatio === '9:16' ? '#111' : '#fff', color: aspectRatio === '9:16' ? '#fff' : '#333' }}>9:16 Shorts</button>
            <button onClick={() => setAutoSubtitles(!autoSubtitles)} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', backgroundColor: autoSubtitles ? '#e6f4ea' : '#fff', color: autoSubtitles ? '#137333' : '#999', borderColors: autoSubtitles ? '#137333' : '#ddd' }}>Subtitles</button>
            <button onClick={() => setAutoBgm(!autoBgm)} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', backgroundColor: autoBgm ? '#e6f4ea' : '#fff', color: autoBgm ? '#137333' : '#999', borderColors: autoBgm ? '#137333' : '#ddd' }}>BGM Auto</button>
          </div>
        </div>

        {/* Section 4: Action Triggers */}
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button 
            onClick={handleGenerateRecap}
            style={{ width: '100%', backgroundColor: '#1a73e8', color: '#fff', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '16px', fontWeight: '700', cursor: 'pointer' }}
          >
            Generate AI Recap Video
          </button>
          <button style={{ width: '100%', backgroundColor: '#fff', color: '#555', border: '1px solid #ddd', borderRadius: '12px', padding: '10px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
            Export Final Master 1080p
          </button>
        </div>

      </div>
    </div>
  );
}