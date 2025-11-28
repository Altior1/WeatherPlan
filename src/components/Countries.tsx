export default function Country({name, flag_url}: {name:{common: string}, flag_url: string}) {
    return (
       
            <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '12px 16px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                background: '#fff',
                maxWidth: '320px',
                margin: '8px 0'
            }}>
                <img
                src={flag_url}
                alt={`Flag of ${name.common}`}
                style={{ width: '48px', height: '32px', objectFit: 'cover', borderRadius: '4px', marginRight: '16px' }}
                />
                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{name.common}</span>
            </div>
        
    )
}