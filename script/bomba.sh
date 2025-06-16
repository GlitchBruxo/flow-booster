#!/system/bin/sh

#=====================================================#
#   BOMBA.SH - ANDROID CLI OPTIMIZER [🔥 MODO BRUTAL] #
#   Por xGlitchBruxo - Execução: sh /sdcard/bomba.sh  #
#=====================================================#

# Diretórios
LOG_DIR="/sdcard/Logs"
BACKUP_DIR="$LOG_DIR/Backup_Optimizer"
mkdir -p "$LOG_DIR" "$BACKUP_DIR"

# Log
LOG="$LOG_DIR/AndroidOptimizer_LOG.txt"
echo "" > "$LOG"

# Informações básicas
DEVICE_MODEL=$(getprop ro.product.model)
BRAND=$(getprop ro.product.brand)
API=$(getprop ro.build.version.sdk)

# Estilo
G="\033[1;32m"
Y="\033[1;33m"
R="\033[1;31m"
N="\033[0m"

ascii_logo() {
clear
echo ""
  cat << "EOF"

███████╗██╗      ██████╗ ██╗    ██╗    ██████╗  ██████╗  ██████╗ ███████╗████████╗███████╗██████╗ 
██╔════╝██║     ██╔═══██╗██║    ██║    ██╔══██╗██╔═══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
█████╗  ██║     ██║   ██║██║ █╗ ██║    ██████╔╝██║   ██║██║   ██║███████╗   ██║   █████╗  ██████╔╝
██╔══╝  ██║     ██║   ██║██║███╗██║    ██╔══██╗██║   ██║██║   ██║╚════██║   ██║   ██╔══╝  ██╔══██╗
██║     ███████╗╚██████╔╝╚███╔███╔╝    ██████╔╝╚██████╔╝╚██████╔╝███████║   ██║   ███████╗██║  ██║
╚═╝     ╚══════╝ ╚═════╝  ╚══╝╚══╝     ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝

EOF
echo ""
cat << "EOF"
╔════════════════════════════════════════════════════╗
║        🚀 ANDROID CLI OPTIMIZER - BOMBA.SH         ║
╠════════════════════════════════════════════════════╣
║    Executando com Brutalidade, Foco e Eficiência   ║
╚════════════════════════════════════════════════════╝
EOF
}

log()   { echo -e "${G}[+] $1${N}"; echo "[+] $1" >> "$LOG"; }
warn()  { echo -e "${Y}[!] $1${N}"; echo "[!] $1" >> "$LOG"; }
error() { echo -e "${R}[x] $1${N}"; echo "[x] $1" >> "$LOG"; }

#============== BACKUP & RESTORE ==============#

backup_configs() {
  log "🔐 Salvando configs atuais..."
  settings list global > "$BACKUP_DIR/global.txt" 2>/dev/null
  settings list secure > "$BACKUP_DIR/secure.txt" 2>/dev/null
  settings list system > "$BACKUP_DIR/system.txt" 2>/dev/null
  pm list packages -u > "$BACKUP_DIR/apps.list" 2>/dev/null
}

restore_configs() {
  log "🔄 Restaurando configs anteriores..."
  for type in global secure system; do
    FILE="$BACKUP_DIR/$type.txt"
    [ -f "$FILE" ] || continue
    while IFS= read -r line; do
      key=$(echo "$line" | cut -d= -f1)
      val=$(echo "$line" | cut -d= -f2-)
      settings put $type "$key" "$val" 2>/dev/null
    done < "$FILE"
  done
}

restore_apps() {
  [ -f "$BACKUP_DIR/apps.list" ] || return
  while IFS= read -r line; do
    pkg=$(echo "$line" | cut -d: -f2)
    pm install-existing --user 0 "$pkg" 2>/dev/null && log "🔁 App restaurado: $pkg"
  done < "$BACKUP_DIR/apps.list"
}

#============== DESBLOAT & OPTIMIZE ==============#

desbloat_brand() {
  log "🧹 Desinstalando apps desnecessários para $BRAND..."
  case "$(echo "$BRAND" | tr '[:upper:]' '[:lower:]')" in
    xiaomi)
      PKGS="com.miui.systemAdSolution com.miui.analytics com.miui.msa.global com.miui.weather2 com.xiaomi.midrop"
      ;;
    samsung)
      PKGS="com.samsung.android.bixby.agent com.samsung.android.weather com.samsung.android.spay com.samsung.android.app.spage"
      ;;
    motorola)
      PKGS="com.motorola.ccc.ota com.motorola.genie com.motorola.timeweatherwidget com.motorola.launcher"
      ;;
    *)
      warn "Marca desconhecida. Aplicando desbloat genérico agressivo."
      PKGS="com.facebook.katana com.facebook.system com.netflix.mediaclient com.google.android.apps.youtube.music com.amazon.mShop.android.shopping"
      ;;
  esac

  for pkg in $PKGS; do
    pm uninstall -k --user 0 "$pkg" 2>/dev/null && log "🗑️ $pkg removido"
  done
}

optimize_android() {
  log "🚀 Otimizando sistema..."

  # Animações
  settings put global window_animation_scale 0
  settings put global transition_animation_scale 0
  settings put global animator_duration_scale 0
  log "⚡ Animações desativadas"


  # DNS Privado AdGuard
  settings put global private_dns_mode hostname
  settings put global private_dns_specifier dns.adguard.com
  log "🛡️ DNS privado ativado: dns.adguard.com"

  # Timeout e rotação
  settings put system screen_off_timeout 60000
  settings put system accelerometer_rotation 0

  # Tempo automático desligado (controle manual)
  settings put system auto_time 0

  # Tela ligada enquanto plugado
  settings put global stay_on_while_plugged_in 3

  # Ativa RAM Plus (se suportado)
  settings put global ram_plus 1 2>/dev/null && log "📈 RAM Plus ativado (se suportado)" || warn "⚠️ RAM Plus não suportado"

  # Limpa caches (via pm)
  log "🧽 Limpando caches de apps..."
  for pkg in $(pm list packages -3 -f | cut -d= -f2); do
    pm clear "$pkg" 2>/dev/null
  done

  # Força fechamento de apps em background para liberar RAM
  log "🧹 Forçando parada de apps ociosos..."
  for pkg in $(pm list packages -3 | cut -f2 -d:); do
    am force-stop "$pkg" 2>/dev/null
  done

  # Desativa atualizações automáticas Google Play (pode impactar apps importantes)
  settings put global auto_update_apps 0
  log "⚙️ Atualizações automáticas desativadas"

  # Otimização sistema de arquivos (simples)
  log "🛠️ Otimizando arquivos temporários..."
  rm -rf /data/dalvik-cache/* 2>/dev/null
  rm -rf /data/system/gesture.key 2>/dev/null

  # Atualiza pocket com tema dark se possível
  if command -v pocket &>/dev/null; then
    pocket -t dark
    log "🌑 Pocket atualizado para modo dark"
  else
    warn "⚠️ Pocket não encontrado para modo dark"
  fi

  log "✔️ Otimização concluída"
}

#============== MODOS OPCIONAIS ===================#

modo_gamer() {
  log "🎮 Ativando MODO GAMER..."
  settings put global wifi_scan_always_enabled 0
  settings put global background_data 0
  settings put global data_saver_mode 1
  settings put secure adaptive_connectivity_enabled 0
  settings put global airplane_mode_on 0
  settings put system screen_brightness 200
  settings put system haptic_feedback_enabled 0
  settings put global restricted_background_apps 1
  log "✔️ Modo Gamer configurado"
}

modo_bateria() {
  log "🔋 Modo economia de bateria..."
  settings put global battery_saver_constants "vibration_disabled=true"
  settings put global low_power 1
  settings put global background_activity_allowed 0
  settings put secure location_mode 0
  log "✔️ Economia ativada"
}

modo_minimalista() {
  log "🧼 Modo Minimalista aplicado..."
  settings put system notification_light_pulse 0
  settings put global always_finish_activities 1
  log "✔️ Tudo no mínimo"
}

#============== FINAL + MENSAGEM ===================#

finaliza_exibindo_log() {
  echo ""
  echo "${G}✔️ Otimização finalizada com sucesso!${N}"
  echo ""
  echo "📄 Log salvo em: $LOG"
  echo ""
  echo "${Y}📢 Compartilhe sua experiência com a gente!${N}"
  echo "${Y}💬 Entre no nosso servidor: ${G}https://discord.gg/darkanomaly${N}"
}

#============== MAIN CLI ========================#

ascii_logo
log "📱 Dispositivo: $DEVICE_MODEL ($BRAND - API $API)"
log "📂 Log salvo em: $LOG"

case "$1" in
  --boost)
    backup_configs
    desbloat_brand
    optimize_android
    finaliza_exibindo_log
    ;;
  --reverse)
    restore_configs
    restore_apps
    finaliza_exibindo_log
    ;;
  --gamer)
    modo_gamer
    finaliza_exibindo_log
    ;;
  --battery)
    modo_bateria
    finaliza_exibindo_log
    ;;
  --minimal)
    modo_minimalista
    finaliza_exibindo_log
    ;;
  --desbloat)
    desbloat_brand
    finaliza_exibindo_log
    ;;
  --dns)
    settings put global private_dns_mode hostname
    settings put global private_dns_specifier dns.adguard.com
    log "🛡️ DNS privado ativado"
    finaliza_exibindo_log
    ;;
  --darkmode)
    cmd uimode night yes
    log "🌙 Dark mode ativado"
    finaliza_exibindo_log
    ;;
  *)
    echo -e "${Y}⚙️  Uso: sh bomba.sh [--boost|--reverse|--gamer|--battery|--minimal|--desbloat|--dns|--darkmode]${N}"
    ;;
esac

exit 0
